import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Contact } from "./Contact";
import * as contactActions from "@/app/actions/contact";
import { LazyMotion, domAnimation } from "framer-motion";

// Mock the server action module
vi.mock("@/app/actions/contact", () => ({
  submitContactForm: vi.fn(),
}));

const renderWithFramerMotion = (component: React.ReactNode) => {
  return render(
    <LazyMotion features={domAnimation}>
      {component}
    </LazyMotion>
  );
};

describe("Contact Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("displays an error message when the form submission fails", async () => {
    // Mock the server action to return an error state
    const mockSubmitContactForm = vi.spyOn(contactActions, "submitContactForm");
    mockSubmitContactForm.mockResolvedValueOnce({
      status: "error",
      message: "Something went wrong. Please try again later.",
    });

    renderWithFramerMotion(<Contact />);

    // Fill out the form correctly to bypass client-side validation
    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Project Details/i), {
      target: { value: "A detailed description of the project" },
    });

    // Submit the form
    const submitButtons = screen.getAllByRole("button", { name: /Send Message/i, hidden: true });

    // Wrap the submission in act() to avoid React act warnings when testing form actions
    // that might trigger async transitions.
    await act(async () => {
      const form = submitButtons[0].closest('form');
      if (form) {
        fireEvent.submit(form);
      } else {
        fireEvent.click(submitButtons[0]);
      }
    });

    // Wait for the error message to appear in the DOM
    await waitFor(() => {
      const errorMessage = screen.getByText("Something went wrong. Please try again later.");
      expect(errorMessage).toBeInTheDocument();
      // Ensure the error message has the correct role for accessibility
      expect(errorMessage).toHaveAttribute("role", "alert");
    });
  });

  it("displays a success message when the form submission succeeds", async () => {
    // Mock the server action to return a success state
    const mockSubmitContactForm = vi.spyOn(contactActions, "submitContactForm");
    mockSubmitContactForm.mockResolvedValueOnce({
      status: "success",
      message: "Thank you for reaching out. I've received your message and will get back to you within 24 hours.",
    });

    renderWithFramerMotion(<Contact />);

    // Fill out the form correctly
    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Project Details/i), {
      target: { value: "A detailed description of the project" },
    });

    // Submit the form
    const submitButtons = screen.getAllByRole("button", { name: /Send Message/i, hidden: true });
    await act(async () => {
      const form = submitButtons[0].closest('form');
      if (form) {
        fireEvent.submit(form);
      } else {
        fireEvent.click(submitButtons[0]);
      }
    });

    // Wait for the success message to appear in the DOM
    await waitFor(() => {
      expect(screen.getByText("Message Sent!")).toBeInTheDocument();
      expect(
        screen.getByText("Thank you for reaching out. I've received your message and will get back to you within 24 hours.")
      ).toBeInTheDocument();
    });
  });
});
