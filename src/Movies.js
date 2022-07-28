import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Movie from "./Movie";

export default function Movies() {
  const [movies, setMovies] = useState();
  const [arrayMovies, setArrayMovies] = useState();

  useEffect(() => {
    const requisicao = axios.get(`
    https://mock-api.driven.com.br/api/v5/cineflex/movies`);

    requisicao.then((resposta) => {
      console.log(resposta);
      setMovies(resposta.data);
    });
  }, []);

  if (movies) {
    console.log(movies);

    return (
      <MoviesArray>
        {movies.map((oneMovie) => {
          return <Movie oneMovie={oneMovie} />;
        })}
      </MoviesArray>
    );
  }

  return <>Carregando...</>;
}

const MoviesArray = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
