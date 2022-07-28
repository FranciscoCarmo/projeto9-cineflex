import styled from "styled-components";

export default function Form() {
  return (
    <FormSection>
      <p>Nome do comprador:</p>
      <NameSection placeholder="Digite seu nome..."></NameSection>

      <p>CPF do comprador:</p>
      <CpfSection placeholder="Digite seu CPF..."></CpfSection>
      <Button>Reservar assento(s)</Button>
    </FormSection>
  );
}

const FormSection = styled.div`
  width: 100%;

  margin-top: 40px;
  padding: 0 25px;

  font-size: 18px;

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 5px;
    width: 327px;
  }
`;

const NameSection = styled.input`
  width: 327px;
  height: 51px;
  border-radius: 3px;

  border: solid 1px #d4d4d4;
  font-size: 18px;
  font-style: italic;
  color: #afafaf;

  padding-left: 20px;

  margin-bottom: 15px;
`;

const CpfSection = styled.input`
  width: 327px;
  height: 51px;
  border-radius: 3px;

  border: solid 1px #d4d4d4;
  font-size: 18px;
  font-style: italic;
  color: #afafaf;

  padding-left: 20px;
`;

const Button = styled.div`
  width: 225px;
  height: 42px;
  border-radius: 3px;

  background-color: #e8833a;
  color: white;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 28px;
`;
