import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Home from "./Home";

describe("When Home is created", () => {
  it("Main is displayed", async () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    await screen.findByText("Promoted Content");
    await screen.findByText("Features");

    const features = container.getElementsByClassName("feature-item");
    expect(features.length).toBe(3);
  });
});
