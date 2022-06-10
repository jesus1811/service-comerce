import styled from "styled-components";

export const Select = styled.select`
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
export const Subtitle = styled.p`
  font-weight: bold;
  font-size: 20px;
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
