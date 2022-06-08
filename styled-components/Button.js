import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  transition: all ease-out 200ms;
  font-weight: bold;
  font-size: 20px;
  background: ${({ outline }) => (outline ? "transparent" : "#343d4c")};
  color: ${({ outline }) => (outline ? "#343d4c" : "white")};
  border: solid 2px #343d4c;
  &:hover {
    background: #343d4c;
    color: white;
  }
`;
