import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it } from "vitest";
import Login from "./Login";

describe("When Login page is created", () => {
  it("header, main is displayed", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    await screen.findByRole("banner");
    await screen.findByRole("main");

    await screen.findByText("Email");
    await screen.findByText("Password");
    await screen.findByText("Remember me");
    await screen.findAllByText("Log In");
  });
});
