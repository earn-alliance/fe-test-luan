import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Toggle } from "../components/Toggle";
import { useFilter } from "../hooks/useFilter";
import { useState } from "react";

vi.mock("../hooks/useFilter");

describe("Toggle Component", () => {
  it("should toggle correctly when clicked", () => {
    const TestWrapper = () => {
      const [isLive, setIsLive] = useState(false);

      (useFilter as jest.Mock).mockReturnValue({
        isLive,
        setIsLive,
      });

      return <Toggle falseLabel="Off" trueLabel="On" />;
    };

    render(<TestWrapper />);

    const toggleInput = screen.getByRole("checkbox");

    expect(toggleInput).not.toBeChecked();

    fireEvent.click(toggleInput);
    expect(toggleInput).toBeChecked();

    fireEvent.click(toggleInput);
    expect(toggleInput).not.toBeChecked();
  });
});
