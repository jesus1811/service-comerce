import styled from "styled-components";

export const Title = styled.h1`
  font-size: 35px;
  font-weight: 600;
  text-align: ${({ center }) => (center ? "center" : "initial")};
  color: ${({ dark }) => (dark ? "white" : "#111827")};
`;
