"use client";
import { HeaderContainer, Menu, Logo } from "./header.styles";
import LogoMad from "../../../public/Images/header/mad-logo.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo src={LogoMad} alt="Logo Mad Digital" />
      <Menu>
        <a href="#Como-Funciona">Como funciona</a>
        <a href="#Nossos-Serviços">Serviços</a>
        <a href="#Resultados">Resultados</a>
      </Menu>
    </HeaderContainer>
  );
}
