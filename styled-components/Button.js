import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  transition: all ease-out 200ms;
  font-weight: bold;
  font-size: 20px;
  background: ${({ outline, danger, dark }) =>
    dark
      ? outline
        ? "transparent"
        : danger
        ? "transparent"
        : "white"
      : outline
      ? "transparent"
      : danger
      ? "#fff4e5"
      : "#291839"};
  color: ${({ outline, danger, dark }) =>
    dark ? (outline ? "white" : danger ? "#E74135" : "#291839") : outline ? "#291839" : danger ? "#5f2120" : "white"};
  border: solid 2px ${({ danger, dark }) => (dark ? (danger ? "#E74135" : "white") : danger ? "#5f2120" : "#291839")};
  &:hover {
    background: ${({ danger }) => (danger ? "#5f2120" : "#291839")};
    color: ${({ danger }) => (danger ? "#fff4e5" : "white")};
  }
`;
