import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Footer from "./Footer";

describe("When Footer is created", () => {
  it("footer text is displayed", async () => {
    render(<Footer />);
    await screen.findByText("Copyright 2020 Argent Bank");
  });
});
