import Image from "next/image";
import styled from "styled-components";
import ButtonDestack from "../global/ButtonDestack/ButtonDestack";

export const ResultsContainer = styled.section`
  display: flex;
  background-color: #f2f2f2;
  padding-top: 40px;
  justify-content: center;
  flex-wrap: wrap-reverse;
`;

export const Img = styled(Image)`
  width: 550px;
  height: auto;
  display: flex;

  @media(max-width: 740px){
    width: 100%;
  }
`;

export const ResultsDescription = styled.div`
  max-width: 400px;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: end;

  @media(max-width: 740px){
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    align-items: center;

    #button-destak {
      position: relative;
      top: 250px;
    }
  }

`;

export const Subtitle = styled.h3`
  display: inline;
  color: #050505;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 20px;
`;

export const Destak = styled(Subtitle)`
  color: #4f28d9;
`;

export const Clients = styled.div`
  padding-top: 25px;
  display: flex;
  text-align: right;
  justify-content: end;
  align-items: center;

  div > h4 {
    color: #4f28d9;
    font-size: 36px;
  }

  div > p {
    color: #050505;
    font-size: 20px;
    font-weight: 800;
  }

  /* @media(max-width: 740px){
    align-items: center;
    text-align: center;
    flex-direction: row-reverse;
  } */
`;

export const Investment = styled.div`
  display: flex;
`;

export const Icon = styled(Image)`
  width: 66px;
  height: auto;
  margin-left: 10px;
`;

export const ResultsButtonDestack = styled(ButtonDestack)`
    @media(max-width: 740px) {
      position: relative;
      left: 120px;
      margin-left: 20px;
  }
`