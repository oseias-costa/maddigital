import Image from "next/image";
import { styled } from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    background-color: #1c0f49;
    color: #fff;
    display: flex;
    padding: 3em;
    justify-content: space-around;
    flex-wrap: wrap;
    p {
        color: #fff;
    }

    .Footer__Item-nav{
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    padding-bottom: 1em;
    
}
.Footer__Item-nav > a{
    padding-bottom: .7em;
    color: #fff;
    transition: .1s linear;

    &:hover {
        color: #794efe;
    }
}

.Footer__Item-adress{
    padding-bottom: 2em;
}

.Footer__Item-adress > p:first-of-type{
    text-transform: uppercase;
    color: #fff;
}

.Footer__Item-social{
    fill: var(--blue-midle);
    width: 3.3em;
    height: 3.3em;
    padding: 0.2em;
    border-radius: 50em;
    margin-top: 1em;
    transition: all 0.4s ease-out;
}

.Footer__Item-social:first-of-type{
    margin-right: 0.3em;
}

.Footer__Item-social:hover{
    background-color: #794efe;
    fill: #794efe;
}

@media (max-width: 740px){
        text-align: center;

    .Footer__Item-nav{
        padding-top: 2em;
        padding-bottom: 2em;
    }

}
`

export const Logo = styled(Image)`
  height: 60px;
  width: auto;
`;

export const Icon = styled(Image)`
`;