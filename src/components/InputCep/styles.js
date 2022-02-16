import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 15px;
  margin: 34px 0;
  border-radius: 8px;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);

  display: flex;

  input {
    background-color: transparent;
    border: 0;
    font-size: 1.25rem;
    color: #fff;
    margin-right: 8px;

    &::placeholder {
      color: #d5d5d5;
    }
  }

  button {
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
