import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Nav from "./Nav";

describe("When Nav is created", () => {
  it("Nav is displayed", async () => {
    render(<Nav />);
    await screen.findByRole("navigation");
  });
});
