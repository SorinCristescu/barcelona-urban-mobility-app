import styled from 'styled-components';
import { device, lightTheme, darkTheme } from '../../styles';

export const Container = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btn {
      margin-right: 20px;
      font-size: 14px;
      cursor: pointer;
      color: ${(props) =>
        props.darkModeActive
          ? lightTheme.text.primary
          : darkTheme.text.primary};
    }
    .btn:active {
      transform: scale(0.95);
    }
  }
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

    @media ${device.mobileS} {
      display: none;
    }
    @media ${device.mobileM} {
      display: none;
    }
    @media ${device.mobileL} {
      display: none;
    }
    @media ${device.laptop} {
      display: flex;
    }
    @media ${device.laptopL} {
      display: flex;
    }
    @media ${device.desktop} {
      display: flex;
    }
  }
`;
