import styled from "styled-components";

export const Main = styled.main`
  width: 500px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 16px 0;
    font-size: 39px;
  }

  span {
    margin-bottom: 16px;
    font-weight: bold;
  }
`;
