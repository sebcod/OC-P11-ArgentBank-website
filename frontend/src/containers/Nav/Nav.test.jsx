import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Nav from "./Nav";

describe("Nav component", () => {
  it("Nav is displayed", async () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    await screen.findByRole("navigation");
  });

  it("redirects to login on login menu click", () => {
    const { container } = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );

    const navLink = container.querySelector(".LoginLink a");

    fireEvent.click(navLink);

    expect(window.location.pathname).toBe("/login");
  });

  it("should render Logout with token", () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWE0NjhmNTFlNjc2MWEzODI2YWExNyIsImlhdCI6MTcwNjE3OTQ0OCwiZXhwIjoxNzA2MjY1ODQ4fQ.drXc5YF8Nki6x4aZhznka_4sblaGFiTXduHp6rLVdAU";
    Object.defineProperty(window.sessionStorage, "argentbank", {
      value: token,
    });
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    screen.getByText("Logout");
  });

  it("should login menu on logout menu click", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWE0NjhmNTFlNjc2MWEzODI2YWExNyIsImlhdCI6MTcwNjE3OTQ0OCwiZXhwIjoxNzA2MjY1ODQ4fQ.drXc5YF8Nki6x4aZhznka_4sblaGFiTXduHp6rLVdAU";
    Object.defineProperty(window.sessionStorage, "argentbank", {
      value: token,
    });

    const { container } = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );

    const logout = container.querySelector(".LogoutLink");
    fireEvent.click(logout);

    expect(screen.findByText("Login"));
  });
});
