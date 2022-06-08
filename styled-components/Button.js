import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  transition: all ease-out 200ms;
  font-weight: bold;
  font-size: 20px;
  background: ${({ outline, danger }) => (outline ? "transparent" : danger ? "#fff4e5" : "#343d4c")};
  color: ${({ outline, danger }) => (outline ? "#343d4c" : danger ? "#5f2120" : "white")};
  border: solid 2px ${({ danger }) => (danger ? "#5f2120" : "#343d4c")};
  &:hover {
    background: ${({ danger }) => (danger ? "#5f2120" : "#343d4c")};
    color: ${({ danger }) => (danger ? "#fff4e5" : "white")};
  }
`;
