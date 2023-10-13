"use client";
import { HeaderContainer, Menu, Logo } from "./header.styles";
import LogoMad from "../../../public/Images/header/mad-logo.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo src={LogoMad} alt="Logo Mad Digital" />
      <Menu>
        <a href="#HowWork">Como funciona</a>
        <a href="#OurServices">Serviços</a>
        <a href="#Clients">Clientes</a>
      </Menu>
    </HeaderContainer>
  );
}
