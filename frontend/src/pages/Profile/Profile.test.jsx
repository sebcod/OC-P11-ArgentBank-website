import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it } from "vitest";
import Profile from "./Profile";

describe("When Profile page is created", () => {
  it("header, main is displayed", async () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    );
    await screen.findByRole("banner");
    await screen.findByRole("main");

    await screen.findByText("Profile");
  });
});
