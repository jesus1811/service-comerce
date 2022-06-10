import styled from "styled-components";
export const Input = styled.input`
  font-size: 20px;
  color: ${({ dark }) => (dark ? "white" : "#343d4c")};
  border-bottom: solid 2px ${({ dark }) => (dark ? "white" : "#343d4c")};
  padding: 8px 16px;
  outline: none;
  font-weight: bold;
  background: transparent;
  &::placeholder {
    color: ${({ dark }) => (dark ? "white" : "#343d4c")};
  }
`;
