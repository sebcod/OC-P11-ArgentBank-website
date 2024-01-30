import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { describe, it } from "vitest";
import Header from "./Header";

const mockStore = configureMockStore();
const storeConnected = mockStore({
  USER: {
    userData: {
      userName: "Sébastien",
    },
    userStatus: { connected: false },
  },
});

describe("When Header is created", () => {
  it("header is displayed with logo and nav", () => {
    render(
      <Provider store={storeConnected}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    screen.getByAltText("Argent Bank Logo");
    screen.findByRole("banner");
    screen.findByRole("navigation");
  });
});
