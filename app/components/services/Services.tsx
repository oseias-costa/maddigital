import * as S from "./services.styles";
import Background from "../../../public/Images/services/background-services.png";
import Image from "next/image";
import { serviceData } from "./serviceData";

export default function Services(){
    const services = serviceData.map(item => {
        return (
            <S.ServiceItem key={item.id}>
                <Image src={item.icon} alt={item.text} />
                <h3>{item.text}</h3>
            </S.ServiceItem>
        )
    })

    return(
        <S.ServicesContainer>
            <Image
                src={Background}
                fill={true}
                style={{ objectFit: "cover" }}
                alt="Background Mad Digital"
            />
            <h2>Nossos serviços</h2>
            <S.ServicesItems>
                {services}
            </S.ServicesItems>
        </S.ServicesContainer>
    )
}