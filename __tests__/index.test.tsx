import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import React from "react";

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <Home
        allPostsData={[
          {
            id: "1",
            title: "first post",
            date: "2022-03-16",
            contentHtml: "html",
          },
        ]}
      />
    );

    const heading = screen.getByRole("heading", {
      name: /blog/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

const sum = (a: number, b: number) => a + b;

describe("sum()", () => {
  it("should return 5 if given 2 and 3 ", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
