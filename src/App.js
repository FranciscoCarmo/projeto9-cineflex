import TopHeader from "./TopHeader";

import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Session from "./Session";
import SeatsPage from "./SeatsPage";
import GlobalStyle from "./globalStyles";
import Success from "./Success";
import { useState } from "react";

export default function App() {
  const [pedido, setPedido] = useState({});
  return (
    <>
      <GlobalStyle />
      <Content>
        <BrowserRouter>
          <TopHeader />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sessoes/:idFilme" element={<Session />}></Route>
            <Route
              path="/assentos/:idSessao"
              element={<SeatsPage pedido={pedido} setPedido={setPedido} />}
            ></Route>
            <Route
              path="/sucesso"
              element={<Success pedido={pedido} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </Content>
    </>
  );
}

const Content = styled.div`
  max-width: 700px;
  width: 100vw;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  font-family: "Roboto", sans-serif;

  * {
    box-sizing: border-box;
  }
`;
