import styled from 'styled-components';

const dimming = 'rgba(0, 0, 0, 0.5)';
const formBackgroundColor = 'rgb(128, 124, 147)';
const inputTextColor = '#000000';
const focusColor = '#800080FF';
const buttonBackground = '#199e7f';
const buttonBorder = '#FFFFFF';
const buttonBorderRadius = '15px';

export const ShadowWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${dimming};
`;

export const CitySelectorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 50%;
  width: 50%;
  background: ${formBackgroundColor};
  align-items: center;
  border-radius: 0 0 10% 10% / 0% 0% 10% 10%;
  transition: all 0.4s ease;

  &:hover {
    border-radius: 0 0 50% 50% / 0% 0% 10% 10%;
    box-shadow: 10px 10px rgba(0, 0, 0, 0.25);
  }

  @media screen and ${({ theme }) => theme.device.tablet} {
    width: 70%;
  }
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
`;

export const EntryPrompt = styled.h2`
  font-size: 24px;
`;

export const Input = styled.input.attrs({ type: 'text' })`
  margin: 10px 0 0 0;
  border-radius: 15px;
  padding: 0 0 0 10px;
  color: ${inputTextColor};
  outline: none;
  border: none;
  line-height: 30px;
  font-size: 18px;

  &:focus {
    outline: 2px solid ${focusColor};
  }
`;

export const SearchButton = styled.button`
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
  background: ${buttonBackground};
  width: 50%;

  line-height: 30px;
  font-size: 24px;

  border-radius: ${buttonBorderRadius};

  border: none;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: ${buttonBorder};
    border-bottom-color: ${buttonBorder};
    border-radius: ${buttonBorderRadius};
    transform: scale(0.1, 1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
    border-radius: ${buttonBorderRadius};
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1, 1);
  }

  &:hover::after {
    opacity: 0;
    transform: scale(0.1, 1);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
