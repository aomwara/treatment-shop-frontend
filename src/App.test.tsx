import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./hooks/useTreatments", () => ({
  __esModule: true,
  default: () => ({
    items: [],
    loading: false,
    loadRef: { current: null }
  })
}));

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("shows Treatment title", () => {
    render(<App />);
    expect(
      screen.getByText(/treatment/i)
    ).toBeInTheDocument();
  });
});
