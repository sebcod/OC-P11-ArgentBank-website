import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Main from "./Main";

describe("When Main is created", () => {
  it("Main is displayed", async () => {
    render(<Main />);
    await screen.findByRole("main");
  });
});
