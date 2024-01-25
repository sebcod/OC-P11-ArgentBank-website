import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Logo from "./Logo";

describe("Logo Component", () => {
  it("renders logo component", () => {
    render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );

    screen.getByAltText("Argent Bank Logo");
    screen.getByRole("img");
  });

  it("redirects to home on logo click", async () => {
    const { container } = render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );

    const logoLink = container.querySelector(".logo");

    fireEvent.click(logoLink);

    await waitFor(() => {
      expect(window.location.pathname).toBe("/");
    });
  });
});
