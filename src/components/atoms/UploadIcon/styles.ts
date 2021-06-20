import styled from "styled-components";

export const LabelContainer = styled.label`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: var(--color-primary);
`;

export const IconContainer = styled.span`
  color: #fff;
  line-height: 0;
  font-size: 1.3em;
`;

export const InputCustom = styled.input`
  display: none;
`;
