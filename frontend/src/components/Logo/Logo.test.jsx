import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it } from "vitest";
import Logo from "./Logo";

describe("When Logo is created", () => {
  it("H1 logo is displayed", async () => {
    render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );

    await screen.findByText("Argent Bank");
  });
});
