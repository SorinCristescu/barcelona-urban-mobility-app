import styled from 'styled-components';
import { device, lightTheme, darkTheme } from '../../styles';

export const Container = styled.form`
  position: relative;
  width: 80%;
  height: 50px;
  .search {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;

    width: 50px;
    height: 50px;
    background: ${(props) =>
      props.darkModeActive ? darkTheme.bg.primary : lightTheme.bg.primary};
    border-radius: 50%;
    transition: all 1s;
    z-index: 4;
    &:hover {
      cursor: pointer;
    }
    &::before {
      content: '';
      position: absolute;
      margin: auto;
      top: 22px;
      right: 0;
      bottom: 0;
      left: 22px;
      width: 8px;
      height: 2px;
      background: ${(props) =>
        props.darkModeActive ? lightTheme.bg.primary : darkTheme.bg.primary};
      transform: rotate(45deg);
      transition: all 0.5s;
    }
    &::after {
      content: '';
      position: absolute;
      margin: auto;
      top: -3px;
      right: 0;
      bottom: 0;
      left: -3px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 2px solid
        ${(props) =>
          props.darkModeActive ? lightTheme.bg.primary : darkTheme.bg.primary};
      transition: all 0.5s;
    }
  }
  input {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;

    width: 50px;
    height: 50px;
    outline: none;
    border: none;
    background: ${(props) =>
      props.darkModeActive ? darkTheme.bg.primary : lightTheme.bg.primary};
    color: ${(props) =>
      props.darkModeActive ? lightTheme.bg.primary : darkTheme.bg.primary};
    font-size: 18px;
    padding: 0 80px 0 20px;
    border-radius: 30px;
    transition: all 1s;
    opacity: 0;
    z-index: 5;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      width: 100%;
      opacity: 1;
      cursor: text;

      @media ${device.tablet} {
        width: 60%;
      }
    }
    &:focus ~ .search {
      background: ${(props) =>
        props.darkModeActive ? darkTheme.bg.primary : lightTheme.bg.primary};
      z-index: 6;
      &::before {
        top: 0;
        left: 0;
        width: 25px;
      }
      &::after {
        top: 0;
        left: 0;
        width: 25px;
        height: 2px;
        border: none;
        background: ${(props) =>
          props.darkModeActive ? lightTheme.bg.primary : darkTheme.bg.primary};
        border-radius: 0%;
        transform: rotate(-45deg);
      }
    }
    &::placeholder {
      color: ${(props) =>
        props.darkModeActive ? lightTheme.bg.primary : darkTheme.bg.primary};
      opacity: 0.5;
    }
  }
`;
