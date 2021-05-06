import styled from 'styled-components';

export const MarkerButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  transform: scale(${(props) => props.scale});

  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(2);
    transition: transform 0.3s ease;
  }
`;

export const PopupContainer = styled.div`
  h3 {
    color: ${(props) => props.color};
  }
`;
