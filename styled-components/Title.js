import styled from "styled-components";

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  text-align: ${({center}) => (center ? "center" : "initial")};
  color: #111827;
`;
