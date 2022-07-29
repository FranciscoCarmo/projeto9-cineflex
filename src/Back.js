import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Back() {
  let navigate = useNavigate();

  return (
    <BackButton
      onClick={() => {
        navigate(-1);
      }}
    >
      <img src={require("./images/arrow.png").default}></img>
    </BackButton>
  );
}

const BackButton = styled.div`
  margin-left: 15px;

  margin-top: 20px;
  position: fixed;
  z-index: 2;

  cursor: pointer;

  img {
    height: 30px;
    width: 40px;
  }
`;
