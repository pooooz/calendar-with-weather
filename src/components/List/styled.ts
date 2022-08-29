import styled from 'styled-components';

const thumbColor = 'rgb(13, 9, 38, 0.7)';
const thumbColorHover = 'rgb(13, 9, 38, 0.9)';

const scrollbarSize = '10px';
const scrollbarSizeTablet = '5px';
const thumbBorderRadius = '15px';

export const RowContainer = styled.ul`
  display: flex;
  flex-grow: 3;
  justify-content: space-between;
  list-style-type: none;

  &::-webkit-scrollbar {
    width: ${scrollbarSize};
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${thumbColor};
    border-radius: ${thumbBorderRadius};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${thumbColorHover};
  }

  @media screen and ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    align-items: center;

    height: 200px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: ${scrollbarSizeTablet};
    }
  }
`;

export const ColumnContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;

  height: 150px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: ${scrollbarSize};
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${thumbColor};
    border-radius: ${thumbBorderRadius};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${thumbColorHover};
  }

  @media screen and ${({ theme }) => theme.device.tablet} {
    &::-webkit-scrollbar {
      width: ${scrollbarSizeTablet};
    }
  }
`;
