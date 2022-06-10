import styled from "styled-components";
export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
export const Image = styled.img`
  width: 161px;
  height: 161px;
  border-radius: 50%;
  aspect-ratio: 1/1;
`;
export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
`;
export const Error = styled.p`
  font-size: 20px;
  text-align: center;
  color: ${({ dark }) => (dark ? "#FFE2B7" : "#5f2120")};
  font-weight: 600;
  line-height: 23px;
  background: ${({ dark }) => (dark ? "#160B0B" : "#fff4e5")};
  padding: 8px;
  border-radius: 4px;
`;
