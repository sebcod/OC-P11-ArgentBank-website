import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it } from "vitest";
import NotFound from "./NotFound";

describe("When Notfound page is created", () => {
  it("header, main is displayed", async () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    await screen.findByRole("banner");
    await screen.findByRole("main");

    await screen.findByText("Page not found");
  });
});
