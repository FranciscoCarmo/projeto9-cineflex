import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <Wrapper>
      <SuccessTitle>Pedido feito com sucesso!</SuccessTitle>

      <h3>Filme e sessão</h3>
      <p>Xuxa e os doendes</p>
      <p>08/03/1995 14:00</p>
      <h3>Ingressos</h3>

      <p>Assento 2</p>
      <p>Assento 5</p>

      <h3>Comprador</h3>
      <p>Nome: Francisco Carmo</p>
      <p>CPF: 11776393600</p>

      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button>Voltar pra Home</Button>
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 0 30px;

  margin-bottom: 117px;

  display: flex;
  flex-direction: column;

  h3 {
    font-weight: bold;
    font-size: 24px;
    margin-top: 35px;
  }
  p {
    font-size: 22px;
    margin-top: 6px;
  }

  div {
    align-self: center;
  }
`;

const SuccessTitle = styled.div`
  width: 100%;
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
