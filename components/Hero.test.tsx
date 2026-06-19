import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";
import { siteConfig } from "@/lib/site";

describe("Hero", () => {
  it("renders the name as the main heading", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { level: 1, name: siteConfig.name }),
    ).toBeInTheDocument();
  });

  it("renders the pitch", () => {
    render(<Hero />);
    expect(screen.getByText(siteConfig.pitch)).toBeInTheDocument();
  });

  it("links to GitHub, LinkedIn, email, and resume", () => {
    render(<Hero />);
    const hrefs = screen
      .getAllByRole("link")
      .map((a) => a.getAttribute("href"));
    expect(hrefs).toContain(siteConfig.links.github);
    expect(hrefs).toContain(siteConfig.links.linkedin);
    expect(hrefs).toContain(siteConfig.links.resume);
    expect(hrefs).toContain(`mailto:${siteConfig.email}`);
  });
});
