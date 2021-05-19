import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 100px 50px 100px;

  .left-side {
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    .links {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }
  .right-side {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
