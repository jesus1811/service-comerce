import styled from "styled-components";
export const Description = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
  text-align: ${({center}) => (center ? "center" : "initial")};
  color: #677a98;
`;
