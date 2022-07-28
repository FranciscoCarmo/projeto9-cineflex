import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Movie({ oneMovie }) {
  const { id, title, posterURL, overview, releaseDate } = oneMovie;

  const path = `/sessoes/${id}`;
  console.log(path);

  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <Poster>
        <img src={oneMovie.posterURL}></img>
      </Poster>
    </Link>
  );
}

const Poster = styled.div`
  width: 145px;
  height: 209px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5px 5px;

  box-shadow: 0 2px 2px 2px rgb(0, 0, 0, 0.05);

  cursor: pointer;

  img {
    width: 129px;
    height: 193px;
  }
`;
