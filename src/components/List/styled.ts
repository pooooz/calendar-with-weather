import styled from 'styled-components';

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
`;
