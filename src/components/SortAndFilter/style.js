import styled from 'styled-components';
import { lightTheme, darkTheme } from '../../styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SortButton = styled.button`
  margin-right: 0 20px 0 0;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) =>
    props.darkModeActive ? darkTheme.bg.primary : lightTheme.bg.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:focus {
    outline: none;
  }
`;
