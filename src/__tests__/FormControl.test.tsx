import "@testing-library/jest-dom/extend-expect";

import { ChangeEvent } from "react";
import { describe, test } from "@jest/globals";
import { render, fireEvent } from "@testing-library/react";

import FormControl from "components/molecules/FormControl";

describe("Probando funcionalidades del control", () => {
  test("Verificando el evento OnChange", () => {
    const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
      console.log(ev.currentTarget.value);
    };

    const component = render(
      <FormControl labelText="Usuario" onChange={onChange} />
    );

    const parentDiv = component.getByText("Usuario").parentNode;
    const input = parentDiv.querySelector("input");

    fireEvent.change(input, {
      target: {
        value: "billy",
      },
    });
  });
});
