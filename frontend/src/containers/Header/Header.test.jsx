import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it } from "vitest";
import Header from "./Header";

describe("When Header is created", () => {
  it("header is displayed", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    await screen.findByRole("banner");
  });
});
