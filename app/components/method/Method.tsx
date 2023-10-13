"use client";
import * as S from "./method.styles";

import Captation from '../../../public/Images/method/captation.svg'
import Inbound from '../../../public/Images/method/inbound.svg'
import Strategy from '../../../public/Images/method/strategy.svg'

export default function Method(){
    return(
        <S.MethodContainer id="Como-Funciona">
            <h2>Entenda como funciona o médodo Mad</h2>
            <S.MethodItem>
                <S.Icon src={Captation} alt='Captação de dados e modo de conduta do público alvo' />
                <div>
                    <h3>Captação de dados e modo de conduta do público alvo</h3>
                    <p>Estrutura par você identificar quem são as pessoas que realmente tem potencial para comprar da sua empresa.</p>
                </div>
            </S.MethodItem>
            <S.MethodItem>
                <S.Icon src={Inbound} alt='Inbound Marketing' />
                <div>
                    <h3>Inbound Marketing</h3>
                    <p>Foco se concentra totalmente na captação de novos clientes.</p>
                </div>
            </S.MethodItem>
            <S.MethodItem>
                <S.Icon src={Strategy} alt='Estratégia Branding para a marca' />
                <div>
                    <h3>Estratégia Branding para a marca</h3>
                    <p>Análise detalhada da persona e aumento do engajamento nas redes, devido ao fluxo de novas pessoas e clientes.</p>
                </div>
            </S.MethodItem>
        </S.MethodContainer>
    )
}