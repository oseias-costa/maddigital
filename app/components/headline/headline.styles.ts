import Image from "next/image";
import styled from "styled-components";

export const HeadlineContainer = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  text-align: center;
  position: relative;
  max-width: 750px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #fffffe;
  display: inline;
  text-transform: uppercase;
  font-size: 42px;
`;

export const TitleDestack = styled(Title)`
  color: #794efe;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const HeadlineItemContainer = styled.div`
  display: flex;
  padding-top: 36px;
  align-items: center;
`;

export const Icon = styled(Image)``;

export const Description = styled.p`
  text-align: left;
  color: #fffffe;
  max-width: 370px;
  font-size: 22px;
`;
