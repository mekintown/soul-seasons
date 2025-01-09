import { describe, expect, it } from "vitest";
import Page from "./page";
import { render } from "@/lib/test-utils/render";

describe("Page Component", () => {
  it("renders the component correctly with translations", () => {
    const page = render(<Page />);

    expect(page.getByText("Hello")).toBeInTheDocument();

    const linkElement = page.getByRole("link", { name: /button/i });
    expect(linkElement).toHaveAttribute("href", "/1-2");
    expect(linkElement).toBeInTheDocument();
  });
});
