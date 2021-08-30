// External
import styled from '@emotion/styled';

// Internal
import { AlbumCover } from '@nx-workspace/ui-music';

const StyledPage = styled.div`
  text-align: center;
`;

export function Index() {
  return (
    <StyledPage>
      <AlbumCover />
    </StyledPage>
  );
}

export default Index;
