import styled from "styled-components";
import Movies from "./Movies";

export default function Home() {
  return (
    <div className="home">
      <HomeTitle>
        <h2>Selecione o filme</h2>
      </HomeTitle>
      <Movies />
    </div>
  );
}

const HomeTitle = styled.div`
  width: 100%;
  height: 110px;

  font-size: 24px;
  margin-top: 67px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #293845;
`;
