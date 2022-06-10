import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  transition: all ease-out 200ms;
  font-weight: bold;
  font-size: 20px;
  background: ${({ outline, danger }) => (outline ? "white" : danger ? "#fff4e5" : "#291839")};
  color: ${({ outline, danger }) => (outline ? "#291839" : danger ? "#5f2120" : "white")};
  border: solid 2px ${({ danger }) => (danger ? "#5f2120" : "#291839")};
  &:hover {
    background: ${({ danger }) => (danger ? "#5f2120" : "#291839")};
    color: ${({ danger }) => (danger ? "#fff4e5" : "white")};
  }
`;
