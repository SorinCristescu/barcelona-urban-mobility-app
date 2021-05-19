import styled from 'styled-components';
import { lightTheme, darkTheme } from '../../css/theme';
import {
  mobileS,
  mobileM,
  mobileL,
  tablet,
  laptop,
  laptopL,
  desktop,
  desktopL,
} from '../../css/queries';

export const Container = styled.header`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 100px;
  background: linear-gradient(
    180deg,
    #fbfbfb 75.52%,
    rgba(251, 251, 251, 0) 100%
  );
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
