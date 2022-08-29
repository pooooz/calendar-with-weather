import styled from 'styled-components';

const inactiveColor = '#326265';
const activeColor = '#0c6d96';

export const ButtonArea = styled.div`
  padding: 0 7%;
  display: flex;
`;

export const ChoosePrompt = styled.p`
  margin: 0 10px 0 0;
`;

interface ServiceButtonProps {
  isActive: boolean;
}
export const ServiceButton = styled.button<ServiceButtonProps>`
  cursor: pointer;
  margin: 0 10px 0 0;
  padding: 3px;
  border: none;
  background: ${({ isActive }) => (isActive ? activeColor : inactiveColor)};

  &:hover {
    box-shadow: 0 3px 10px ${inactiveColor};
  }
`;
