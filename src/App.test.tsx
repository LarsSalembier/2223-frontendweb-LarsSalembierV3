import { render } from "@testing-library/react";
import type { RenderResult } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<App />);
  });

  it("should render", () => {
    expect(renderResult).toBeTruthy();
  });
});
