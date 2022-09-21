import styled from 'styled-components';

const INACTIVE_COLOR = '#326265';
const ACTIVE_COLOR = '#0c6d96';

export const ButtonArea = styled.div`
  padding: 0 ${({ theme }) => theme.spaces.m}%;
  display: flex;
  align-items: center;
`;

export const ChoosePrompt = styled.p`
  margin: 0 ${({ theme }) => theme.spaces.l}px 0 0;
`;

interface ServiceButtonProps {
  isActive: boolean;
}
export const ServiceButton = styled.button<ServiceButtonProps>`
  cursor: pointer;
  margin: 0 ${({ theme }) => theme.spaces.l}px 0 0;
  padding: ${({ theme }) => theme.spaces.s}px;
  border: none;
  background: ${({ isActive }) => (isActive ? ACTIVE_COLOR : INACTIVE_COLOR)};

  &:hover {
    box-shadow: 0 3px 10px ${INACTIVE_COLOR};
  }
`;
