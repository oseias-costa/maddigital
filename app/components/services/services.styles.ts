import Image from "next/image";
import { styled } from "styled-components";

export const ServicesContainer = styled.section`
  position: relative;
  z-index: 1;
  padding-top: 63px;
  padding-bottom: 63px;

  h2 {
    text-align: center;
  }
`;

export const ServicesItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  z-index: 4;
  padding-bottom: 15px;
`;

export const ServicesContainerContent = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #fff;
    padding-bottom: 50px;
    position: relative;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 32px;
  }

  max-width: 780px;
  margin: 0 auto;
`;

export const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;

  h3 {
    width: 160px;
  }

  @media(max-width: 740px) {
    padding-right: 0px;
    padding-bottom: 5px;
  }
`;

export const Img = styled(Image)`
  background-repeat: round;
`;
