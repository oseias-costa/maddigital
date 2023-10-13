"use client";
import { FooterContainer, Logo, Icon } from "./footer.styles";
import LogoMad from "../../../public/Images/header/mad-logo.svg";
import Instagram from "../../../public/Images/footer/instagram.svg";
import Whatsapp from "../../../public/Images/footer/whatsapp.svg";

export default function Footer(){
    return(
        <FooterContainer>
            <div className='Footer__Item'>
                <Logo src={LogoMad} alt="Logo Mad Digital" />
                <p>suporte@maddigital.com.br</p>
                <p>(54) 9 9900-9687</p>
                <p>(48) 9 9173-1687</p>
                <div>
                    <a href='https://www.instagram.com/maddigital__/' target='_blank'>
                        <Icon src={Instagram} alt='Instagram Mad Digital' className='Footer__Item-social' />
                    </a>
                    <a href='https://nux514f6cjp.typeform.com/to/itgZsLcm' target='_blanck'>
                        <Icon src={Whatsapp} alt='Instagram Mad Digital' className='Footer__Item-social' />
                    </a>
                </div>
            </div>
            <div className='Footer__Item-nav'>
                <a href='#'>Início</a>
                <a href='#Como-Funciona'>Como Funciona</a>
                <a href='#Nossos-Serviços'>Serviços</a>
                <a href='#Resultados'>Clientes</a>
            </div>
            <div className='Footer__Item'>
                <div className='Footer__Item-adress'>
                    <p>Unidade 1</p>
                    <p>R. Gustavo Barroso, 195. Passo Fundo-RS</p>
                </div>
                <div className='Footer__Item-adress'>
                    <p>Unidade 2</p>
                    <p>Vila Moema. Tubarão-SC</p>
                </div>
            </div>
        </FooterContainer>
    )
}