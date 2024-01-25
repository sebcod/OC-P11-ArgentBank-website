import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Login from "./Login";

describe("Login component", () => {
  it("form is displayed", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    await screen.findByText("Email");
    await screen.findByText("Password");
    await screen.findByText("Remember me");
    await screen.findAllByText("Log In");
  });

  it("Should redirect to profile on login button click", async () => {
    const { getByLabelText, container } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInput = getByLabelText("Email");
    fireEvent.change(emailInput, { target: { value: "tony@stark.com" } });
    const emailPassword = getByLabelText("Password");
    fireEvent.change(emailPassword, { target: { value: "password123" } });

    const LoginButton = container.querySelector(".sign-in-button");

    fireEvent.click(LoginButton);

    await waitFor(() => {
      setTimeout(() => {
        expect(window.location.pathname).toBe("/profile");
      }, 500);
    });
  });
});
