import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it } from "vitest";
import Account from "./Account";

const account = {
  title: "Argent Bank Checking (x8349)",
  amount: "$2,082.79",
  description: "Available Balance",
};
describe("When account is created", () => {
  it("View transactions is displayed", async () => {
    render(
      <BrowserRouter>
        <Account account={account} />
      </BrowserRouter>
    );

    screen.getByText(/View transactions/i);
  });
});
