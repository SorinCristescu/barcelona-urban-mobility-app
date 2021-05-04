import styled from 'styled-components';
import { lightTheme, darkTheme } from '../../styles';

export const Container = styled.li`
  width: 100%;
  height: 40px;
  padding: 20px;
  margin-bottom: 5px;
  border: 1px solid
    ${(props) =>
      props.darkModeActive ? lightTheme.bg.secondary : darkTheme.bg.secondary};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: #e5e5e5;
  }
  p {
    font-size: 12px;
    font-weight: 100;
    color: #333333;
  }

  h5 {
    margin-left: 10px;
    font-size: 14px;
    /* color: ${(props) => props.color}; */
    color: #333333;
  }

  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .detail-link {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
