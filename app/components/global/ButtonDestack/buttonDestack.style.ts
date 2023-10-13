import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 30px;
  border-radius: 40px;
  box-shadow: rgba(166, 84, 254, 1.5) 0px 5px 40px;
  max-width: 353px;
  transition: .2s linear;
  cursor: pointer;

  p {
    position: relative;
    color: #fffffe;
    font-size: 22px;
    /* text-transform: uppercase; */
  }

  &:hover {
    box-shadow: rgba(166, 84, 254, 4.9) 0px 5px 60px;
  }
`;
