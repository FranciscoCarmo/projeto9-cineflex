import styled from "styled-components";
import { Link } from "react-router-dom";

export default function oneSession({ session }) {
  const { name, id } = session;

  const path = `/assentos/${id}`;

  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <Session>{name}</Session>
    </Link>
  );
}

const Session = styled.div`
  width: 83px;
  height: 43px;
  border-radius: 3px;

  background-color: #e8833a;

  color: white;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 10px;

  cursor: pointer;
`;
