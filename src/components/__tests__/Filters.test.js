import { render, screen, fireEvent } from "@testing-library/react";
import Filters from "../Filters";

test("renders filters and toggles correctly", () => {
  const mockOnFilterChange = jest.fn();
  const filters = {
    is24Hours: false,
    hasConvenienceStore: false,
    hasHotFood: false,
    acceptsBpCard: false,
  };

  render(<Filters filters={filters} onFilterChange={mockOnFilterChange} />);

  // Click on the filter section to expand
  fireEvent.click(screen.getByText(/Filters/i));

  // Toggle the "is24Hours" checkbox
  const is24HoursCheckbox = screen.getByLabelText(/is24 hours/i);
  fireEvent.click(is24HoursCheckbox);

  // Expect the mock function to be called with the updated filter
  expect(mockOnFilterChange).toHaveBeenCalledWith("is24Hours");
});
