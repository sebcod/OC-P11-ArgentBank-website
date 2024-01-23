import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./Home";

describe("When Home is created", () => {
  it("header, main, footer is displayed", async () => {
    const { container } = render(<Home />);
    await screen.findByRole("banner");
    await screen.findByRole("main");
    await screen.findByRole("contentinfo");

    await screen.findByText("Promoted Content");
    await screen.findByText("Features");

    const features = container.getElementsByClassName("feature-item");
    expect(features.length).toBe(3);
  });
});
