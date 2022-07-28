import styled from "styled-components";
import OneSession from "./OneSession";

export default function SessionsOfDay({ day }) {
  const { id, weekday, date, showtimes } = day;

  return (
    <Container>
      <h3>
        {weekday} - {date}
      </h3>
      <SessionContainer>
        {showtimes.map((session) => {
          return <OneSession session={session} key={session.id} />;
        })}
      </SessionContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;

  justify-self: center;

  h3 {
    width: 100%;

    color: #293845;
    font-size: 20px;

    margin-bottom: 30px;
  }
`;

const SessionContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;

  display: flex;
  flex-wrap: wrap;
`;
