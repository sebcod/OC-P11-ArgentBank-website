import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { describe, it } from "vitest";
import Profile from "./Profile";

const mockStore = configureMockStore();
const storeConnected = mockStore({
  USER: {
    userData: {
      userName: "Sébastien",
    },
    userStatus: { connected: false },
  },
});

describe("When Profile page is created", () => {
  it("profile message is displayed", async () => {
    render(
      <Provider store={storeConnected}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </Provider>
    );

    screen.getByText(/Sébastien/i);
  });
});
