"use client";
import * as S from "./clients.styles";
import Background from "../../../public/Images/services/background-services.png";
import { clientsData } from "./clients-data";

 
export default function Clients(){
    const logos = clientsData.map(item => <S.Logo src={item.logo} alt={item.alt} key={item.id} />)

    return(
        <S.ClientsContainer>
            <S.Img src={Background} alt='Alguns dos clientes da Mad Digital' fill={true} />
            <h2>Alguns de Nossos clientes</h2>
            <S.ClientsLogos>
                {logos}
            </S.ClientsLogos>
        </S.ClientsContainer>
    )
}