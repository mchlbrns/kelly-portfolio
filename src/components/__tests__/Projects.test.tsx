import { render, screen, fireEvent } from "@testing-library/react";
import { Projects } from "../Projects";

// Mock intersection observer for Framer Motion
beforeAll(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe("Projects Component", () => {
  it("renders correctly with title and description", () => {
    render(<Projects />);
    expect(screen.getByText(/Projects: Case Studies on this Next.js Developer Portfolio Website/i)).toBeInTheDocument();
    expect(screen.getByText(/A selection of recent projects showcasing my expertise/i)).toBeInTheDocument();
  });

  it("displays all filtering categories", () => {
    render(<Projects />);
    const categories = ["All", "AI Automation", "Full Stack", "Workflow Automation", "Desktop Apps"];
    categories.forEach((category) => {
      expect(screen.getByRole("button", { name: category })).toBeInTheDocument();
    });
  });

  it("renders projects initially (All category)", () => {
    render(<Projects />);
    // "Freelance Portfolio Conversion Engine" is the first project
    expect(screen.getByText("Freelance Portfolio Conversion Engine")).toBeInTheDocument();
    // "Enterprise AI Customer Support Agent" is another
    expect(screen.getByText("Enterprise AI Customer Support Agent")).toBeInTheDocument();
  });

  it("filters projects by category", () => {
    render(<Projects />);

    // Check initial state ("All")
    expect(screen.getByText("Freelance Portfolio Conversion Engine")).toBeInTheDocument(); // Full Stack
    expect(screen.getByText("Enterprise AI Customer Support Agent")).toBeInTheDocument(); // AI Automation

    // Click "AI Automation" tab
    fireEvent.click(screen.getByRole("button", { name: "AI Automation" }));

    // Now, AI Automation project should be present
    expect(screen.getByText("Enterprise AI Customer Support Agent")).toBeInTheDocument();

    // But Full Stack project should NOT be present
    expect(screen.queryByText("Freelance Portfolio Conversion Engine")).not.toBeInTheDocument();
  });

  it("correctly maps Windows Scripting/AutoHotkey to Desktop Apps", () => {
    render(<Projects />);

    // Click "Desktop Apps" tab
    fireEvent.click(screen.getByRole("button", { name: "Desktop Apps" }));

    // "Excel & Legacy System AHK Automation" has category "Workflow Automation" but tech includes "AutoHotkey"
    expect(screen.getByText("Excel & Legacy System AHK Automation")).toBeInTheDocument();
  });
});
