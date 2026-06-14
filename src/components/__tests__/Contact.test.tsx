import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Contact, ContactSkeleton } from "../Contact";

// Mock lucide-react
vi.mock("lucide-react", () => ({
  Send: () => <div data-testid="icon-send">Send</div>,
  CheckCircle: () => <div data-testid="icon-check-circle">CheckCircle</div>,
  Loader2: () => <div data-testid="icon-loader2">Loader2</div>,
}));

// Mock framer-motion to simplify testing
vi.mock("framer-motion", () => {
  const MockComponent = ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => {
    const validProps = { ...(props as Record<string, unknown>) };
    delete validProps.initial;
    delete validProps.animate;
    delete validProps.exit;
    delete validProps.whileHover;
    delete validProps.whileTap;
    delete validProps.whileInView;
    delete validProps.viewport;
    delete validProps.transition;
    return <div {...(validProps as React.HTMLAttributes<HTMLDivElement>)}>{children}</div>;
  };
  return {
    m: {
      div: MockComponent,
      h2: MockComponent,
      p: MockComponent,
      button: MockComponent,
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

// Define mock data for action
const mockFormAction = vi.fn();
let mockIsPending = false;
let mockState: Record<string, unknown> = { status: "idle" };

// Because React 19 testing with JSDOM and testing-library can throw errors regarding transitions
// and `useActionState` without experimental support properly configured, it's safer and fully correct
// to mock `useActionState` when testing the UI representation. This is testing the view component!
vi.mock("react", async () => {
  const actual = await vi.importActual("react");
  return {
    ...actual,
    useActionState: () => [mockState, mockFormAction, mockIsPending],
  };
});

describe("Contact Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockIsPending = false;
    mockState = { status: "idle" };
  });

  it("renders the contact form properly", () => {
    render(<Contact />);

    expect(screen.getByText(/Contact Me: Hire a Full-Stack Developer/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Project Type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Project Details/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Send Message/i })).toBeInTheDocument();
  });

  it("validates empty form submission and displays errors client-side", async () => {
    render(<Contact />);

    const user = userEvent.setup();
    const submitButton = screen.getByRole("button", { name: /Send Message/i });

    // Form submission is validated client-side with safeParse before calling formAction
    await user.click(submitButton);

    // Expect errors to appear
    await waitFor(() => {
      expect(screen.getByText("Name is required")).toBeInTheDocument();
      expect(screen.getByText("Invalid email address")).toBeInTheDocument();
      expect(screen.getByText("Message must be at least 10 characters")).toBeInTheDocument();
    });

    // Server action should not be called due to client-side validation errors
    expect(mockFormAction).not.toHaveBeenCalled();
  });

  it("calls the server action on successful validation", async () => {
    render(<Contact />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/Name/i), "John Doe");
    await user.type(screen.getByLabelText(/Email/i), "john@example.com");
    await user.type(screen.getByLabelText(/Project Details/i), "Building a new SaaS MVP platform.");

    await user.click(screen.getByRole("button", { name: /Send Message/i }));

    expect(mockFormAction).toHaveBeenCalled();
  });

  it("renders success state when status is success", () => {
    mockState = {
      status: "success",
      message: "Thank you for reaching out."
    };

    render(<Contact />);

    expect(screen.getByText("Message Sent!")).toBeInTheDocument();
    expect(screen.getByText("Thank you for reaching out.")).toBeInTheDocument();
    expect(screen.getByTestId("icon-check-circle")).toBeInTheDocument();
    expect(screen.queryByRole("form")).not.toBeInTheDocument(); // Form should be hidden
  });

  it("renders error message from server state", () => {
    mockState = {
      status: "error",
      message: "Server encountered an error."
    };

    render(<Contact />);

    expect(screen.getByText("Server encountered an error.")).toBeInTheDocument();
  });

  it("renders server validation errors mapped to fields", () => {
    mockState = {
      status: "error",
      errors: {
        name: ["Server name error"],
      }
    };

    render(<Contact />);

    expect(screen.getByText("Server name error")).toBeInTheDocument();
  });

  it("disables the form while pending", () => {
    mockIsPending = true;

    render(<Contact />);

    expect(screen.getByRole("group", { name: /Contact Form Details/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /Sending.../i })).toBeDisabled();
    expect(screen.getByTestId("icon-loader2")).toBeInTheDocument();
  });
});

describe("ContactSkeleton Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<ContactSkeleton />);
    expect(container.firstChild).toHaveClass("animate-pulse");
  });
});
