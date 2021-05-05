import styled from 'styled-components';

export const MarkerButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.5);
    transition: transform 0.3s ease;
  }
`;

export const PopupContainer = styled.div`
  h3 {
    color: ${(props) => props.color};
  }
`;
