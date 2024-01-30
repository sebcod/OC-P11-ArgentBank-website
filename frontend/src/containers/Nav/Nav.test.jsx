import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { describe, expect, it } from "vitest";
import Nav from "./Nav";

const mockStore = configureMockStore();
const storeConnected = mockStore({
  USER: {
    userData: {
      userName: "Sébastien",
    },
    userStatus: { connected: false },
  },
});
const storeNotConnected = mockStore({
  USER: {
    userData: {
      userName: "Sébastien",
    },
    userStatus: { connected: true },
  },
});

describe("Nav component", () => {
  it("Nav is displayed", async () => {
    render(
      <Provider store={storeConnected}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );
    await screen.findByRole("navigation");
  });

  it("redirects to login on login menu click", () => {
    const { container } = render(
      <Provider store={storeConnected}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );

    const navLink = container.querySelector(".link a");

    fireEvent.click(navLink);

    expect(window.location.pathname).toBe("/login");
  });

  it("should redirect login menu on logout menu click", async () => {
    const { container } = render(
      <Provider store={storeNotConnected}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );

    const logout = container.querySelector(".LogoutLink");
    fireEvent.click(logout);

    expect(screen.findByText("Login"));
  });
});
