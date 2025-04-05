import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Navigation } from "@/components/Navigation";

describe("Navigation", () => {
  it("renders navigation component", () => {
    render(<Navigation />);
    // Add your test assertions here
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
