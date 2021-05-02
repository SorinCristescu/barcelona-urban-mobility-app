import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .text {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 10px;

    p {
      font-weight: 200;
      font-size: 18px;
      line-height: 21px;
      padding: 0;
      margin: 0;
    }

    h5 {
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      padding: 0;
      margin: 0;
    }
  }
`;
