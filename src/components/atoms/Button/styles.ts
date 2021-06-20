import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  background-color: var(--color-green-b);
  color: #fff;
  border: none;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  font-size: 17px;
  border-radius: 10px;
  padding: 10px 0;

  &:hover {
    background-color: var(--color-green-c);
  }

  &:active {
    transform: scale(0.95);
  }

  &.red {
    background-color: var(--color-fucsia-b);
    &:hover {
      background-color: var(--color-fucsia);
    }
  }

  &.ghost {
    color: #fff;
    background-color: transparent;
    border: 2px solid #fff;
  }

  &.small {
    font-size: 14px;
    padding: 4px 0;
  }
`;
