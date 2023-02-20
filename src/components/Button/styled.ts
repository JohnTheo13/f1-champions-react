import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #00afef;
  color: white;
  border: none;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
  height: 42px;
  font-family: Ubuntu, sans-serif;
  width: 100%;
  letter-spacing: 0;
  text-align: center;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  border-radius: 4px;
  display: inline-block;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  font-size: 16px;
  line-height: 18px;

  &:disabled {
    pointer-events: none;
    opacity: 0.3;
    box-shadow: none;
  }
  &:hover {
    background-color: #137ca2;
    box-shadow: none;
  }
  &:active {
    background-color: black;
    box-shadow: none;
  }
  &:focus {
    background-color: black;
    box-shadow: none;
    color: white;
  }
`;

export { StyledButton };
