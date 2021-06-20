import "@testing-library/jest-dom/extend-expect";

import { expect, describe, test } from "@jest/globals";
import { prettyDOM, waitFor } from "@testing-library/dom";
import { render, fireEvent, screen } from "@testing-library/react";

import LoginForm from "components/organism/LoginForm";

describe("Probando funcionalidades del componente LoginForm", () => {
  test("Mostrando el loading del login", async () => {
    render(<LoginForm />);

    const username = "billy123";
    const password = "billy123";

    const usernameInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");

    fireEvent.change(usernameInput, { ev: { currentTarget: { value: username } } });
    fireEvent.change(passwordInput, { ev: { currentTarget: { value: password } } });

    const submitButton = await screen.findByText("Ingresar");
    fireEvent.click(submitButton);

    await waitFor(() => screen.findByText("Loading..."));
  });
});
