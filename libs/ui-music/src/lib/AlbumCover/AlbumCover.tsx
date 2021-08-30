import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface AlbumCoverProps { }

const StyledAlbumCover = styled.div`
  color: pink;
`;

export function AlbumCover(props: AlbumCoverProps) {
  return (
    <StyledAlbumCover>
      <h1>AlbumCover</h1>
    </StyledAlbumCover>
  );
}

export default AlbumCover;
