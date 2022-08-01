import { useParams } from "react-router-dom";
import Back from "./Back";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import SessionsOfDay from "./SessionsOfDay";

export default function Session() {
  const { idFilme } = useParams();

  const [sessions, setSessions] = useState();

  useEffect(() => {
    const requisicao = axios.get(`
    https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

    requisicao.then((resposta) => {
      console.log(resposta);
      setSessions(resposta.data);
    });
  }, []);

  if (sessions) {
    const { id, title, posterURL, overview, releaseDate, days } = sessions;

    return (
      <>
        <Back />
        <SessionTitle>
          <h2>Selecione o horário</h2>
        </SessionTitle>
        <SessionsContainer>
          {days.map((day) => {
            return <SessionsOfDay day={day} key={day.id} />;
          })}
        </SessionsContainer>
        <Footer>
          <Poster>
            <img src={posterURL}></img>
          </Poster>
          <p>{title}</p>
        </Footer>
      </>
    );
  }

  return <>Carregando...</>;
}

const SessionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 22px;
  margin-bottom: 137px;
`;

const SessionTitle = styled.div`
  width: 100%;
  height: 110px;

  font-size: 24px;

  margin-top: 67px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #293845;
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
`;
