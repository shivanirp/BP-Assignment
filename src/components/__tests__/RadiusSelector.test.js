import { render, screen, fireEvent } from "@testing-library/react";
import RadiusSelector from "../RadiusSelector";

test("renders the radius input and allows changing value", () => {
  const mockOnChange = jest.fn();

  render(<RadiusSelector radius={1} onChange={mockOnChange} />);

  // Check if the input is present and displays the correct initial value
  const input = screen.getByLabelText(/radius/i);
  expect(input).toBeInTheDocument();
  expect(input.value).toBe("1");

  // Simulate a change in the radius input to 2 miles
  fireEvent.change(input, { target: { value: "2" } });

  // Expect the mock function to be called with the new value
  expect(mockOnChange).toHaveBeenCalledWith(2);
});
