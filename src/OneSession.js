import styled from "styled-components";

export default function oneSession({ name }) {
  console.log(name);

  return <Session>{name}</Session>;
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
`;
