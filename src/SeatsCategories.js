import styled from "styled-components";

export default function SeatsCategories() {
  return (
    <Container>
      <OneCategory>
        <Ball isSelected="true"></Ball>
        <p>Selecionado</p>
      </OneCategory>

      <OneCategory>
        <Ball></Ball>
        <p>Disponível</p>
      </OneCategory>

      <OneCategory>
        <BallUnavailable></BallUnavailable>
        <p>Indisponível</p>
      </OneCategory>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
`;

const OneCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 13px;
    color: #4e5a65;

    height: 28px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Ball = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 17px;
  background-color: ${(props) => (props.isAvailable ? "#c3cfd9" : "#FBE192")};
  background-color: ${(props) => (props.isSelected ? "#8DD7CF" : "#c3cfd9")};

  border: solid 1px #7b8b99;
  border-color: ${(props) => (props.isAvailable ? "#7b8b99" : "#F7C52B")};
  border-color: ${(props) =>
    props.isSelected && props.isAvailable ? "#1AAE9E" : "#c3cfd9"};
`;

const BallUnavailable = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 17px;
  background-color: ${(props) => (props.isAvailable ? "#c3cfd9" : "#FBE192")};

  border: solid 1px #7b8b99;
  border-color: ${(props) => (props.isAvailable ? "#7b8b99" : "#F7C52B")};
`;
