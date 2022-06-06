import styled from "styled-components";

export const Navigation = styled.section`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 20px;
  transition: all ease-out 150ms;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #e6e6e6;
    position: absolute;
    width: 50%;
    opacity: 0;
    display: none;
    gap: 0;
    bottom: 56px;
    right: 0;
    border-radius: 4px;
    overflow: hidden;
  }
`;