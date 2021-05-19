import styled from 'styled-components';

export const Container = styled.div`
  width: 50px;
  position: fixed;
  left: 100px;
  top: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .number {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      color: lightgray;
      margin-left: 5px;
      font-size: 16px;
    }
  }
`;
