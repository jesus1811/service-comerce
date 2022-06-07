import styled from "styled-components";
import { Card } from "../../../../styled-components";

export const Image = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 90px;
  border-radius: 50%;
`;
export const CardRow = styled(Card)`
  flex-direction: row;
`;
