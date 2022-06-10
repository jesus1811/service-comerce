import styled from "styled-components";

export const Description = styled.p`
  font-size: 22px;
  font-weight: 600;
  line-height: 23px;
  text-align: ${({ center }) => (center ? "center" : "initial")};
  color: ${({ dark }) => (dark ? "hsl(246, 6%, 55%)" : "#677a98")};
`;
