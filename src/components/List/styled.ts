import styled from 'styled-components';

const THUMB_COLOR = 'rgb(13, 9, 38, 0.7)';
const THUMB_COLOR_HOVER = 'rgb(13, 9, 38, 0.9)';

const ROW_CONTAINER_TABLET_HEIGHT = 200;
const COLUMN_CONTAINER_HEIGHT = 150;
const SCROLLBAR_SIZE = 10;
const SCROLLBAR_SIZE_TABLET = 5;

export const RowContainer = styled.ul`
  display: flex;
  flex-grow: 3;
  justify-content: space-between;
  list-style-type: none;

  &::-webkit-scrollbar {
    width: ${SCROLLBAR_SIZE}px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${THUMB_COLOR};
    border-radius: ${({ theme }) => theme.sizes.radius}px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${THUMB_COLOR_HOVER};
  }

  @media screen and ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    align-items: center;

    height: ${ROW_CONTAINER_TABLET_HEIGHT}px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: ${SCROLLBAR_SIZE_TABLET}px;
    }
  }
`;

export const ColumnContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;

  height: ${COLUMN_CONTAINER_HEIGHT}px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: ${SCROLLBAR_SIZE}px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${THUMB_COLOR};
    border-radius: ${({ theme }) => theme.sizes.radius}px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${THUMB_COLOR_HOVER};
  }

  @media screen and ${({ theme }) => theme.device.tablet} {
    &::-webkit-scrollbar {
      width: ${SCROLLBAR_SIZE_TABLET}px;
    }
  }
`;
