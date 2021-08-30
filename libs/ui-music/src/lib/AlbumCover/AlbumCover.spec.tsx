import { render } from '@testing-library/react';

import AlbumCover from './AlbumCover';

describe('AlbumCover', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AlbumCover />);
    expect(baseElement).toBeTruthy();
  });
});
