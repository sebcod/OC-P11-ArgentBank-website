import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it } from "vitest";
import FeatureItem from "./FeatureItem";

const item = {
  img: "../src/imgs/icon-chat_100_100.webp",
  alt: "Chat Icon",
  title: "You are our #1 priority",
  description:
    "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
};

describe("When FeatureItem is created", () => {
  it("feature item is displayed", async () => {
    render(
      <BrowserRouter>
        <FeatureItem item={item} />
      </BrowserRouter>
    );

    await screen.findByText("You are our #1 priority");
  });
});
