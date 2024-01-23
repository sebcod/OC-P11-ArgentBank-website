import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Header from "./Header";

describe("When Header is created", () => {
  it("header is displayed", async () => {
    render(<Header />);
    await screen.findByRole("banner");
  });
});
