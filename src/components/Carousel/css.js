import styled from 'styled-components';

export const Container = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  .cards {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .buttons {
    width: 100px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between-start;
  }

  .arrow-left {
  }

  .arrow-right {
    margin-right: 10px;
  }
  .progress {
    width: 100%;
    height: 2px;
    background-color: #f2f2f2;
    margin: 20px 0 50px 0;
    position: relative;
  }

  .cursor {
    width: 156px;
    height: 2px;
    background-color: #0d0d0d;
    position: absolute;
    top: 0;
    left: ${(props) => props.progress};
  }
`;
