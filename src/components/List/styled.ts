import styled from 'styled-components';

const thumbColor = 'rgb(13, 9, 38, 0.7)';
const thumbColorHover = 'rgb(13, 9, 38, 0.9)';

export const RowContainer = styled.ul`
  display: flex;
  flex-grow: 3;
  justify-content: space-between;
  list-style-type: none;

  @media screen and ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    align-items: center;

    height: 200px;
    overflow-y: scroll;
  }
`;

export const ColumnContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;

  height: 150px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${thumbColor};
    border-radius: 15px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${thumbColorHover};
  }

  @media screen and ${({ theme }) => theme.device.tablet} {
    &::-webkit-scrollbar {
      width: 5px;
    }
  }
`;
