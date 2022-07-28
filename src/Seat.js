import styled from "styled-components";

export default function Seat({ seat }) {
  const { id, name, isAvailable } = seat;

  return <Ball>{name}</Ball>;
}

const Ball = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 17px;
  background-color: #c3cfd9;

  margin: 5px 5px;

  border: solid 1px #7b8b99;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  color: black;
`;
