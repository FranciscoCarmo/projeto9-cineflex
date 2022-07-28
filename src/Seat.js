import styled from "styled-components";

export default function Seat({ seat }) {
  const { id, name, isAvailable } = seat;

  return (
    <Ball isAvailable={isAvailable} onClick={() => console.log(isAvailable)}>
      {name}
    </Ball>
  );
}

const Ball = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 17px;
  background-color: ${(props) => (props.isAvailable ? "#c3cfd9" : "#FBE192")};

  margin: 7px 5px;

  border: solid 1px #7b8b99;
  border-color: ${(props) => (props.isAvailable ? "#7b8b99" : "#F7C52B")};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  color: black;

  cursor: pointer;
`;
