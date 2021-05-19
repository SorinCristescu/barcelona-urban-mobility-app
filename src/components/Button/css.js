import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;
  width: 200px;
  height: 65px;
  /* position: relative; */

  .btn {
    width: 200px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: absolute;
    bottom: 0px;
    right: 0px; */
    background: #4d4dff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  /* .shadow {
    width: 200px;
    height: 65px;
    position: absolute;
    bottom: -6px;
    right: -6px;
    border: 1px dashed #bfbfbf;
    z-index: 0;
  } */

  label {
    position: absolute;
    bottom: 6px;
    left: 6px;
    color: #fff;
  }
`;
