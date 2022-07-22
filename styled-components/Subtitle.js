import styled from "styled-components";
export const Subtitle = styled.p`
  font-size: 28px;
  color: ${({ dark }) => (dark ? "white" : "#343d4c")};
  font-weight: 700;
  text-align: ${({ center }) => (center ? "center" : "initial")};
`;
