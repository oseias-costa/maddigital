import { styled } from "styled-components";

export const ServicesContainer = styled.section`
    background-image: url("../../../public/Images/services/background-services.png");
    
    h2 {
        text-align: center;
    }
`

export const ServicesItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;   
    `

export const ServicesContainerContent = styled.div`
    background-color: transparent;
    position: relative;   
    h2 {
        color: #fff;
        /* padding-top: 90px; */
        /* top: -60px; */
        position: relative;
    }

    max-width: 852px;
    margin: 0 auto;
    /* position: absolute;
    top: 1600px;
    right: 0px;
    left: 0px; */
`

export const ServiceItem = styled.div`
    display: flex;
    align-items: center;
    padding-right: 20px;

    h3 {
        width: 160px;
    }
`