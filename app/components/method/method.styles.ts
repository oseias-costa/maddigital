import Image from "next/image";
import { styled } from "styled-components";

export const MethodContainer = styled.section`
    padding-top: 83px;
    padding-bottom: 83px;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;

    h2 {
        text-align: center;
        color: #4600AF;
        font-weight: 800;
        text-transform: uppercase;
        font-size: 32px;
        padding-bottom: 45px;
    }

    @media(max-width: 740px) {
        padding-left: 20px;
        padding-right: 20px;

        h2 {
            font-size: 28px;
        }
    }
`

export const MethodItem = styled.div`
    display: flex;
    padding-bottom: 20px;

    div {
        max-width: 600px;
        padding-bottom: 10px;

        h3 {
            color: #4600AF;
            font-weight: 800;   
            font-size: 20px;
        }
        p {
            color: #020202;
            font-size: 20px;
        }
    }

    @media(max-width: 740px) {
        div {
            h3, p {
                font-size: 18px;
            }
        }
    }
`

export const Icon = styled(Image)`
    width: 66px;
    height: 66px;
    margin-right: 20px;
`

