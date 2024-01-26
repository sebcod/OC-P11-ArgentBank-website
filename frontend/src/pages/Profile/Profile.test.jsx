import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it } from "vitest";
import Profile from "./Profile";

describe("When Profile page is created", () => {
  it("profile message is displayed", async () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    );

    screen.getByText(/Welcome back/i);
  });
});
