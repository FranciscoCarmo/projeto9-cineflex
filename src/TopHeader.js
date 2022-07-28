import styled from "styled-components";
import { Link } from "react-router-dom";

export default function TopHeader() {
  return (
    <Link to="/">
      <Header>CINEFLEX</Header>
    </Link>
  );
}

const Header = styled.div`
  width: 100%;
  height: 67px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #c3cfd9;

  font-size: 34px;
  color: #e8833a;

  position: fixed;
  top: 0;
  margin-bottom: 67px;
`;
