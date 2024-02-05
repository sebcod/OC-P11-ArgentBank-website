import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { beforeEach, describe, test } from "vitest";
import FormEditUserName from "./FormEditUserName";
const mockStore = configureStore([]);

describe("FormEditUserName", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      USER: {
        userData: {
          userName: "Captain",
          firstName: "Steve",
          lastName: "Rogers",
        },
      },
    });
  });

  test("Must be able to display three input fields and two buttons", async () => {
    render(
      <Provider store={store}>
        <FormEditUserName />
      </Provider>
    );
    screen.getByPlaceholderText(/Captain/i);
    screen.getByPlaceholderText(/Steve/i);
    screen.getByPlaceholderText(/Rogers/i);
    screen.getByRole("button", { name: /Save/i });
    screen.getByRole("button", { name: /Cancel/i });
  });
});
