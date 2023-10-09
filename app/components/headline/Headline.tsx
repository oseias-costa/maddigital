"use client";
import Image from "next/image";
import * as S from "./headline.styles";
import Background from "../../../public/Images/headline/background-headline.png";
import HeadlineItem from "./HeadlineItem";
import PremiumIcon from "../../../public/Images/headline/premium.svg";
import ChartIcon from "../../../public/Images/headline/chart.svg";
import ButtonDestack from "../global/ButtonDestack/ButtonDestack";

export default function Headline() {
  return (
    <>
      <S.HeadlineContainer>
        <Image
          src={Background}
          fill={true}
          style={{ objectFit: "cover" }}
          alt="Background Mad Digital"
        />
        <S.TitleContainer>
          <S.Title>pare de procurar clientes e seja</S.Title>
          <S.TitleDestack>&nbsp;encontrado&nbsp;</S.TitleDestack>
          <S.Title> por eles</S.Title>
        </S.TitleContainer>
        <S.DescriptionContainer>
          <HeadlineItem
            icon={ChartIcon}
            description="A forma mais prática e objetiva de escalar seu negócio com o Marketing Digital"
          />
          <HeadlineItem
            icon={PremiumIcon}
            description="Empresa consolidada com mais de 500 clientes satisfeitos pelo mundo"
          />
          <ButtonDestack />
        </S.DescriptionContainer>
      </S.HeadlineContainer>
    </>
  );
}
