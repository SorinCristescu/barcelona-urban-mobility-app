import styled from 'styled-components';

export const MarkerButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }

  img {
    width: 35px;
    height: 35px;
  }
`;
