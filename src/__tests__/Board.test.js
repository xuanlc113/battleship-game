import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

test("renders", () => {
  const { getByTestId } = render(<Gameboard />);
  expect(getByTestId);
});
