import styled from "styled-components";
export const Subtitle = styled.p`
  font-size: 30px;
  color: #343d4c;
  font-weight: 700;
  text-align: ${({ center }) => (center ? "center" : "initial")};
`;
