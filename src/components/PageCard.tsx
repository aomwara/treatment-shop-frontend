import styled from "styled-components";

export const PageCard = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;

  border-radius: 0;
  box-shadow: none;

  @media (min-width: 768px) {
    max-width: 960px;
    min-height: auto;
    border-radius: 20px;
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  }
`;
