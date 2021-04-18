import "@testing-library/jest-dom";

import { describe } from "@jest/globals";
import { render } from "@testing-library/react";

import Button from "components/atoms/Button";

describe("Fail test", () => {
  test("Testing for configuration", () => {
    const component = render(<Button>Billy</Button>);

    component.getByText("Billy");
  });
});
