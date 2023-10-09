import Background from "../../../../public/Images/headline/background-button.png";
import { ButtonContainer } from './buttonDestack.style'
import Image from "next/image";

export default function ButtonDestack(){
    return(
        <ButtonContainer>
            <Image
                src={Background}
                fill={true}
                style={{ objectFit: "cover", borderRadius: "16px" }}
                alt="Button Mad Digital"
            />
            <p>Quero escalar meu negócio</p>
        </ButtonContainer>
    )
}