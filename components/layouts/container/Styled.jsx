import styled from "styled-components";
export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ dark }) => (dark ? "#13111C" : "#f2f2f2")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  padding: 15px 15px 100px 15px;
`;
