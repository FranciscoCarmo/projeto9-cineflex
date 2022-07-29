import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

import SeatsCategories from "./SeatsCategories";
import Seat from "./Seat";
import Form from "./Form";
import Back from "./Back";

export default function SeatsPage({ pedido, setPedido }) {
  const { idSessao } = useParams();

  const [sessionData, setSessionData] = useState();
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [selectedSeatNumber, setSelectedSeatNumber] = useState([]);

  useEffect(() => {
    const requisicao = axios.get(`
    https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

    requisicao.then((resposta) => {
      console.log(resposta);
      setSessionData(resposta.data);
    });
  }, []);

  if (sessionData) {
    const { id, name, day, movie, seats } = sessionData;

    return (
      <>
        <Back />
        <SeatsPageTitle>Selecione o(s) assentos(s)</SeatsPageTitle>

        <SeatsArray>
          {seats.map((seat) => {
            return (
              <Seat
                seat={seat}
                key={seat.id}
                selectedSeat={selectedSeat}
                setSelectedSeat={setSelectedSeat}
                time={name}
                SelectedSeatNumber={selectedSeatNumber}
                setSelectedSeatNumber={setSelectedSeatNumber}
              />
            );
          })}
        </SeatsArray>

        <SeatsContainer>
          <SeatsCategories />
        </SeatsContainer>

        <Form
          selectedSeat={selectedSeat}
          setSelectedSeat={setSelectedSeat}
          pedido={pedido}
          setPedido={setPedido}
          movie={movie}
          day={day}
          time={name}
          SelectedSeatNumber={selectedSeatNumber}
          setSelectedSeatNumber={setSelectedSeatNumber}
        />

        <Footer>
          <Poster>
            <img src={movie.posterURL}></img>
          </Poster>
          <div>
            <p>{movie.title}</p>
            <p>
              {day.weekday} - {name}
            </p>
          </div>
        </Footer>
      </>
    );
  }

  return <>Carregando ...</>;
}

const SeatsPageTitle = styled.div`
  width: 100%;
  height: 110px;

  font-size: 24px;

  margin-top: 67px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #293845;
`;

const SeatsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SeatsArray = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 0 10px;
  justify-content: space-around;

  margin-bottom: 15px;
`;

const Footer = styled.div`
  width: 100vw;
  height: 117px;

  position: fixed;
  bottom: 0;

  background-color: #dfe6ed;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  p {
    font-size: 26px;
    color: #293845;
    margin-bottom: 5px;
  }
`;

const Poster = styled.div`
  width: 64px;
  height: 89px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  margin: 12px 12px;

  img {
    width: 42px;
    height: 72px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;
