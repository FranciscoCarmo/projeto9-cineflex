import styled from "styled-components";

export default function Seat({
  seat,
  selectedSeat,
  setSelectedSeat,
  SelectedSeatNumber,
  setSelectedSeatNumber,
}) {
  const { id, name, isAvailable } = seat;

  let border = "#F7C52B";
  let bkground = "#FBE192";

  if (isAvailable) {
    border = "#7b8b99";
    bkground = "#c3cfd9";
  }

  if (selectedSeat.includes(id)) {
    border = "#1AAE9E";
    bkground = "#8DD7CF";
  }

  return (
    <Ball
      border={border}
      bkground={bkground}
      onClick={() => {
        console.log(isAvailable);

        if (!selectedSeat.includes(id) && isAvailable) {
          setSelectedSeat([...selectedSeat, id]);
          setSelectedSeatNumber([...SelectedSeatNumber, name]);
        } else {
          setSelectedSeat(selectedSeat.filter((x) => x != id));
          setSelectedSeatNumber(SelectedSeatNumber.filter((x) => x != name));
        }
      }}
    >
      {name}
    </Ball>
  );
}

const Ball = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 17px;
  background-color: ${(props) => props.bkground};

  margin: 7px 5px;

  border: solid 1px #7b8b99;
  border-color: ${(props) => props.border};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  color: black;

  cursor: pointer;
`;
