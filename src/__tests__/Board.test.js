import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Board from "../components/Board";

test("renders", () => {
  const { getByRole } = render(<Board />);
  // expect(getByRole("div")).toHaveLength(100);
});
