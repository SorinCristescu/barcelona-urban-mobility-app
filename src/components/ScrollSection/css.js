import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 20%;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .left-side {
    /* padding: 50px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .right-side {
    padding: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
