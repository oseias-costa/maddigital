import Image from "next/image";
import styled from "styled-components";

export const HeadlineContainer = styled.section`
  /* height: calc(100vh - 80px); */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 63px;
  padding-bottom: 83px;
`;

export const TitleContainer = styled.div`
  text-align: center;
  position: relative;
  max-width: 750px;
  margin: 0 auto;
  z-index: 2;

  @media(max-width: 740px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Title = styled.h1`
  color: #fffffe;
  display: inline;
  text-transform: uppercase;
  font-size: 42px;
  
  @media(max-width: 740px) {
    font-size: 30px;
    display: inline-block;
  }
`;

export const TitleDestack = styled(Title)`
  color: #794efe;
`;

export const DescriptionContainer = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media(max-width: 740px){
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const HeadlineItemContainer = styled.div`
  display: flex;
  padding-top: 36px;
  align-items: center;
`;

export const Icon = styled(Image)`
`;

export const Description = styled.p`
  text-align: left;
  color: #fffffe;
  max-width: 370px;
  font-size: 22px;

  @media(max-width: 740px){
    font-size: 18px;
  }
`;
