import Image from "next/image";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background-color: #00172f;
  justify-content: space-around;
  height: 80px;
  align-items: center;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media (max-width: 740px) {
    justify-content: center;
  }
`;

export const Menu = styled.div`
  display: flex;

  a {
    padding: 10px;
    color: #fff;
    transition: 0.1s linear;

    &:hover {
      color: #794efe;
    }
  }

  @media (max-width: 740px) {
    display: none;
  }
`;

export const Logo = styled(Image)`
  height: 50px;
  width: auto;
`;