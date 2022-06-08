import styled from "styled-components";
export const Card = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: ${({ center }) => (center ? "center" : "initial")};
  flex-direction: column;
  padding: 20px;
  border-radius: 4px;
  gap: 20px;
  width: 95%;
  max-width: 490px;
  background: white;
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.15);
`;
