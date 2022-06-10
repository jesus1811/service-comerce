import styled from "styled-components";

export const Oferta = styled.p`
  font-size: 20px;
  text-align: center;
  color: ${({ dark }) => (dark ? "#B8E7FB" : "#014361")};
  font-weight: 600;
  line-height: 23px;
  background: ${({ dark }) => (dark ? "#071318" : "#e5f6fd")};
  padding: 8px;
  border-radius: 4px;
`;
