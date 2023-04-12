import styled from 'styled-components';

export const VideoWrap = styled.div<{ opacity: number }>`
  opacity: ${({ opacity }) => (opacity !== undefined ? opacity / 100 : 1)};
`;
