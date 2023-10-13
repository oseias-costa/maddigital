import Image from "next/image";
import { styled } from "styled-components";

export const ClientsContainer = styled.section`
    position: relative;
    padding-top: 63px;
    padding-bottom: 63px;

    h2 {
        text-transform: uppercase;
        position: relative;
        color: #fff;
        font-weight: 800;
        font-size: 32px;
        text-align: center;
    }
`

export const Img = styled(Image)`
  background-repeat: round;
`;

export const ClientsLogos = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  img {
    width: 90px;
    aspect-ratio: 3/2;
    object-fit: contain;
  }

  @media(max-width: 740px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const Logo = styled(Image)`
  margin-left: 2px;
  margin-right: 2px;

`
