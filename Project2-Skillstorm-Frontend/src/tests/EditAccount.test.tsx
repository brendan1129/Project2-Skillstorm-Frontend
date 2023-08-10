import { render } from "@testing-library/react";
import EditAccount from "../components/EditAccount";

describe("EditAccount", () => {
  it("should render the EditAccount component", () => {
    const { getByText } = render(<EditAccount />);

    expect(getByText("Edit Account Information")).toBeTruthy();
    expect(getByText("General")).toBeTruthy();
    expect(getByText("First Name")).toBeTruthy();
    expect(getByText("Last Name")).toBeTruthy();
    expect(getByText("Date of Birth")).toBeTruthy();
    expect(getByText("(mm/dd/yyyy)")).toBeTruthy();
    expect(getByText("Address")).toBeTruthy();
    expect(getByText("Street Primary")).toBeTruthy();
    expect(getByText("Street Secondary")).toBeTruthy();
    expect(getByText("City")).toBeTruthy();
    expect(getByText("State")).toBeTruthy();
    expect(getByText("Zip Code")).toBeTruthy();
    expect(getByText("Filing Status")).toBeTruthy();
    expect(getByText("Single")).toBeTruthy();
    expect(getByText("Married Filing Jointly")).toBeTruthy();
    expect(getByText("Married Filing Separately")).toBeTruthy();
    expect(getByText("Head Of Household")).toBeTruthy();
    expect(getByText("Save")).toBeTruthy();
  });
});