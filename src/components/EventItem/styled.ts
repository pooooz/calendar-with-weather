import styled from 'styled-components';

const TIME_BACKGROUND_COLOR = 'rgb(13, 9, 38, 0.9)';

export const EventWrap = styled.li`
  margin: ${({ theme }) => theme.spaces.s}px 0
    ${({ theme }) => theme.spaces.s}px 0;
`;

export const Time = styled.span`
  background: ${TIME_BACKGROUND_COLOR};
  border-radius: ${({ theme }) => theme.sizes.radius}px;
  padding: ${({ theme }) => theme.spaces.s}px;
`;
