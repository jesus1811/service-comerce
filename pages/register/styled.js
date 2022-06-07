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
export const Subtitle = styled.p`
  font-weight: bold;
  font-size: 20px;
`;
export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
`;
export const ContainerFile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 4px;
  padding: 8px 16px;
  color: white;
  background: #343d4c;
`;
export const File = styled.input`
  opacity: 0;
  position: absolute;
  cursor: pointer;
  height: 100%;
`;
