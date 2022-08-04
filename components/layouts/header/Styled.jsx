import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background: ${({ dark }) => (dark ? "#13111C" : "#f2f2f2")};
  padding-bottom: 8px;
  padding-top: 8px;
  z-index: 50;
  position: fixed;
  bottom: 0;
`;
export const CheckBox = styled.input`
  display: none;
  &:checked ~ #navigation {
    opacity: 1;
    min-height: 240px;
    padding: 0 20px;
    display: flex;
  }
`;
export const Logout = styled.button`
  text-align: center;
  color: ${({ dark }) => (dark ? "white" : "#343d4c")};
  font-size: 21px;
`;
export const Perfil = styled.img`
  border-radius: 50%;
  width: 70px;
  object-fit: cover;
  aspect-ratio: 1/1;
`;
export const Icon = styled.img`
  width: 35px;
  aspect-ratio: 1/1;
`;
