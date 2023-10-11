"use client";
import * as S from "./services.styles";
import Background from "../../../public/Images/services/background-services.png";
import Image from "next/image";
import { serviceData } from "./serviceData";
import ButtonDestack from "../global/ButtonDestack/ButtonDestack";
import { useRef } from "react";

export default function Services() {
  const position = useRef<any>(null);
  console.log(position);

  const services = serviceData.map((item) => {
    return (
      <S.ServiceItem key={item.id}>
        <Image src={item.icon} alt={item.text} width={80} />
        <h3>{item.text}</h3>
      </S.ServiceItem>
    );
  });

  return (
    <S.ServicesContainer ref={position}>
      <S.Img src={Background} fill={true} alt="Mad Digital" />
      <S.ServicesContainerContent>
        <h2>Nossos serviços</h2>
        <S.ServicesItems>{services}</S.ServicesItems>
        <ButtonDestack />
      </S.ServicesContainerContent>
    </S.ServicesContainer>
  );
}
