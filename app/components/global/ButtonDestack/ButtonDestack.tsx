import Background from "../../../../public/Images/headline/background-button.png";
import { ButtonContainer } from './buttonDestack.style'
import Image from "next/image";

export default function ButtonDestack({id}: {id?: string}){
    return(
        <ButtonContainer id={id ? id : ''}>
            <a href="https://nux514f6cjp.typeform.com/to/itgZsLcm" target='_blank'>
                <Image
                    src={Background}
                    fill={true}
                    style={{ objectFit: "cover", borderRadius: "16px" }}
                    alt="Button Mad Digital"
                    />
                <p>Quero escalar meu negócio</p>
            </a>
        </ButtonContainer>
    )
}