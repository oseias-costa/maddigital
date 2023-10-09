import { StaticImageData } from "next/image";
import * as S from "./headline.styles";

export default function HeadlineItem({icon, description} : {icon: StaticImageData, description: string}){
    return(
        <S.HeadlineItemContainer>
            <S.Icon src={icon} alt={description} />
            <S.Description>{description}</S.Description>
        </S.HeadlineItemContainer>
    )
}


