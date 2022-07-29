import styled from "styled-components";
import { Link } from "react-router-dom";
import Back from "./Back";

export default function Success({ pedido }) {
  console.log("Sucesso");
  console.log(pedido);

  const { cpf, selectedSeat, time, day, movie, name, SelectedSeatNumber } =
    pedido;

  return (
    <>
      <Back />

      <Wrapper>
        <SuccessTitle>Pedido feito com sucesso!</SuccessTitle>

        <h3>Filme e sessão</h3>
        <p>{movie.title}</p>
        <p>
          {day.date} {time}
        </p>
        <h3>Ingressos</h3>

        {SelectedSeatNumber.map((seat, key) => {
          return <p key={key}>Assento {seat} </p>;
        })}

        <h3>Comprador</h3>
        <p>Nome: {name}</p>
        <p>CPF: {cpf}</p>

        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button>Voltar pra Home</Button>
          </Link>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  /* padding: 0 30px; */

  margin-bottom: 117px;

  display: flex;
  flex-direction: column;

  h3 {
    font-weight: bold;
    font-size: 24px;
    margin-top: 35px;
    margin-left: 45px;
  }
  p {
    font-size: 22px;
    margin-top: 6px;
    margin-left: 45px;
  }

  div {
    align-self: center;
  }
`;

const SuccessTitle = styled.div`
  width: call(100%-90px);
  height: 110px;

  font-size: 24px;

  margin-top: 67px;
  padding: 0 90px;
  word-wrap: normal;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #247a6b;
  font-weight: bold;
`;

const Button = styled.button`
  width: 225px;
  height: 42px;
  border-radius: 3px;

  background-color: #e8833a;
  color: white;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;

  margin-top: 78px;
`;
