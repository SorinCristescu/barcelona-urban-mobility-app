import styled from 'styled-components';
import { device } from '../../styles';

export const Main = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .content {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .details {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    h2 {
      padding: 0;
      margin: 10px 0 20px 0;
      font-size: 22px;
      color: ${(props) => props.color};
    }
    @media ${device.mobileS} {
      width: 100%;
    }
    @media ${device.mobileM} {
      width: 100%;
    }
    @media ${device.mobileL} {
      width: 100%;
    }
    @media ${device.laptop} {
      width: 50%;
      padding-right: 20px;
    }
    @media ${device.laptopL} {
      width: 50%;
      padding-right: 20px;
    }
    @media ${device.desktop} {
      width: 50%;
      padding-right: 20px;
    }
  }

  .map {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    small {
      color: gray;
      margin-bottom: 5px;
    }

    @media ${device.mobileS} {
      width: 100%;
    }
    @media ${device.mobileM} {
      width: 100%;
    }
    @media ${device.mobileL} {
      width: 100%;
    }
    @media ${device.tablet} {
      width: 100%;
    }
    @media ${device.laptop} {
      width: 50%;
    }
    @media ${device.laptopL} {
      width: 50%;
    }
    @media ${device.desktop} {
      width: 50%;
    }
  }
`;
