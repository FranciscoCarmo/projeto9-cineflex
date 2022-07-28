import styled from "styled-components";

export default function Movie({ oneMovie }) {
  const { Id, title, posterURL, overview, releaseDate } = oneMovie;

  console.log(oneMovie);

  return (
    <Poster>
      <img src={oneMovie.posterURL}></img>
    </Poster>
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
