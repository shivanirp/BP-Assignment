import { render, screen } from "@testing-library/react";
import StationList from "../StationList";

test("renders a list of stations", () => {
  const mockStations = [
    {
      id: 1,
      name: "BP Station 1",
      address: "123 Station Road, City",
      radius: 1.5,
      is24Hours: true,
      hasConvenienceStore: false,
      hasHotFood: true,
      acceptsBpCard: true,
    },
    {
      id: 2,
      name: "BP Station 2",
      address: "456 Station Lane, City",
      radius: 2.3,
      is24Hours: false,
      hasConvenienceStore: true,
      hasHotFood: false,
      acceptsBpCard: false,
    },
  ];

  render(<StationList stations={mockStations} />);

  // Check if station names are rendered
  expect(screen.getByText("BP Station 1")).toBeInTheDocument();
  expect(screen.getByText("BP Station 2")).toBeInTheDocument();

  // Check if the station addresses are rendered
  expect(screen.getByText("123 Station Road, City")).toBeInTheDocument();
  expect(screen.getByText("456 Station Lane, City")).toBeInTheDocument();
});
