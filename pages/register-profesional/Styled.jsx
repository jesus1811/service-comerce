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
export const Select = styled.select`
  width: 100%;
  font-size: 18px;
  color: white;
  padding: 2px 8px;
  outline: none;
  background: #291839;
  border-radius: 4px;
  &::placeholder {
    color: white;
  }
`;
export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
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
  background: #291839;
`;
export const File = styled.input`
  opacity: 0;
  position: absolute;
  cursor: pointer;
  height: 100%;
`;
