import Background from "../../../../public/Images/headline/background-button.png";
import { ButtonContainer } from './buttonDestack.style'
import Image from "next/image";

export default function ButtonDestack({id}: {id?: string}){
    // old https://nux514f6cjp.typeform.com/to/itgZsLcm
    return(
        <ButtonContainer id={id ? id : ''}>
            <a href="https://forms.monday.com/forms/908b96151628d9f2971ee60cb1bdb7a0?r=use1" target='_blank'>
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