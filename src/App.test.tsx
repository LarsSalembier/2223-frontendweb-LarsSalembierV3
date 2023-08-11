import { render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';

import Router from './routing/Router';

describe('App', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Router />);
  });

  it('should render', () => {
    expect(renderResult).toBeTruthy();
  });
});
