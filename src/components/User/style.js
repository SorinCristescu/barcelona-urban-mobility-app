import styled from 'styled-components';
import { lightTheme, darkTheme } from '../../styles';

export const Container = styled.div`
  position: absolute;
  top: 80px;
  right: 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* margin-left: 20px; */

  .user-name {
    margin-right: 10px;
    font-size: 10px;
    color: ${(props) =>
      props.darkModeActive ? lightTheme.text.primary : darkTheme.text.primary};
  }

  img {
    width: 25px;
    border-radius: 50%;
    /* margin-right: 10px; */
  }

  .circle {
    width: 25px;
    border-radius: 50%;
    color: ${(props) =>
      props.darkModeActive ? darkTheme.text.primary : lightTheme.text.primary};
    background-color: ${(props) =>
      props.darkModeActive ? lightTheme.bg.primary : darkTheme.bg.primary};
  }
`;
