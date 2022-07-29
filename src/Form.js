import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Form({
  selectedSeat,
  setSelectedSeat,
  pedido,
  setPedido,
  movie,
  day,
  time,
  SelectedSeatNumber,
  setSelectedSeatNumber,
}) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const navigate = useNavigate();

  // Função de submit
  function handleForm(e) {
    e.preventDefault();

    const obj = {
      ids: selectedSeat,
      name,
      cpf,
    };

    if (selectedSeat.length > 0 && name.length > 0 && cpf.length > 0) {
      const requisicao = axios.post(
        "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
        obj
      );

      requisicao.then(() => {
        setPedido({
          name,
          cpf,
          movie,
          selectedSeat,
          day,
          time,
          SelectedSeatNumber,
        });
        navigate("/sucesso");
      });

      setName("");
      setCpf("");
      setSelectedSeat([]);
      setSelectedSeatNumber([]);
    } else {
      alert("Selecione os assentos desejados");
    }
  }

  return (
    <FormSection onSubmit={handleForm}>
      <p>Nome do comprador:</p>
      <NameSection
        placeholder="Digite seu nome... "
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      ></NameSection>

      <p>CPF do comprador:</p>
      <CpfSection
        placeholder="Digite seu CPF..."
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        required
      ></CpfSection>
      <Button type="submit">Reservar assento(s)</Button>
    </FormSection>
  );
}

const FormSection = styled.form`
  width: 100%;

  margin-top: 20px;
  /* padding: 0 25px; */

  font-size: 18px;

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 5px;
    width: 327px;
  }
`;

const NameSection = styled.input`
  width: 327px;
  height: 51px;
  border-radius: 3px;

  border: solid 1px #d4d4d4;
  font-size: 18px;
  font-style: italic;
  color: #afafaf;

  padding-left: 20px;

  margin-bottom: 15px;
`;

const CpfSection = styled.input`
  width: 327px;
  height: 51px;
  border-radius: 3px;

  border: solid 1px #d4d4d4;
  font-size: 18px;
  font-style: italic;
  color: #afafaf;

  padding-left: 20px;
`;

const Button = styled.button`
  width: 225px;
  height: 42px;
  border-radius: 3px;

  border: none;

  background-color: #e8833a;
  color: white;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 28px;
`;
