"use client";
import * as S from "./results.styles";
import Photo from "../../../public/Images/results/investiment-img.png";
import ClientsIcon from "../../../public/Images/results/clients.svg";
import InvestimentIcon from "../../../public/Images/results/investment.svg";
import ButtonDestack from "../global/ButtonDestack/ButtonDestack";

export default function Results() {
  return (
    <S.ResultsContainer>
      <S.Img src={Photo} alt="Mad Digital" />
      <S.ResultsDescription>
        <div>
          <S.Subtitle>Aumente seus resultados com quem é</S.Subtitle>
          <S.Destak>&nbsp;perito&nbsp;</S.Destak>
          <S.Subtitle>no assunto</S.Subtitle>
        </div>
        <S.Clients>
          <div>
            <h4>+ de 500</h4>
            <p>Clientes atendidos</p>
          </div>
          <S.Icon src={ClientsIcon} alt="" />
        </S.Clients>
        <S.Clients>
          <div>
            <h4>+ de 3 Milhões</h4>
            <p>Investidos em anúncios</p>
          </div>
          <S.Icon src={InvestimentIcon} alt="" />
        </S.Clients>
        <ButtonDestack />
      </S.ResultsDescription>
    </S.ResultsContainer>
  );
}
