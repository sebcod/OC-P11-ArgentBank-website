import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Logo from "./Logo";

describe("When Logo is created", () => {
  it("H1 logo is displayed", async () => {
    render(<Logo />);
    await screen.findByText("Argent Bank");
  });
});
