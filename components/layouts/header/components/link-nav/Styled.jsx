import styled from "styled-components";

export const Link = styled.a`
  text-align: center;
  color: ${({ dark }) => (dark ? "white" : "#343d4c")};
  font-size: 21px;
`;
