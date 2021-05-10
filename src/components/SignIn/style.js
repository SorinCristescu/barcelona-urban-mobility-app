import styled from 'styled-components';
import { lightTheme, darkTheme } from '../../styles';

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    width: 300px;
    font-weight: 200;
    font-size: 12px;
    line-height: 21px;
    padding: 0;
    margin: 0;
    color: ${(props) =>
      props.darkModeActive ? lightTheme.text.primary : darkTheme.text.primary};
  }

  h5 {
    width: 300px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    padding: 0;
    margin: 20px 0;
    color: ${(props) =>
      props.darkModeActive ? lightTheme.text.primary : darkTheme.text.primary};
  }
`;
export const Button = styled.button`
  width: 300px;
  height: 50px;
  background-color: transparent;
  color: ${(props) =>
    props.darkModeActive ? darkTheme.bg.primary : lightTheme.bg.primary};
  border: 2px solid
    ${(props) =>
      props.darkModeActive ? darkTheme.bg.primary : lightTheme.bg.primary};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  margin-top: 50px;

  &:hover {
    background-color: ${(props) =>
      props.darkModeActive ? darkTheme.bg.primary : lightTheme.bg.primary};
    color: ${(props) =>
      props.darkModeActive ? darkTheme.text.primary : lightTheme.text.primary};
    cursor: pointer;
  }

  &:focus {
    outline: none;
    transform: scale(0.98);
  }
`;
