import TopHeader from "./TopHeader";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Session from "./Session";
import SeatsPage from "./SeatsPage";
import GlobalStyle from "./globalStyles";
import Success from "./Success";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Content>
        <BrowserRouter>
          <TopHeader />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sessoes/:idFilme" element={<Session />}></Route>
            <Route path="/assentos/:idSessao" element={<SeatsPage />}></Route>
            <Route path="/sucesso" element={<Success />}></Route>
          </Routes>
        </BrowserRouter>
      </Content>
    </>
  );
}

const Content = styled.div`
  max-width: 700px;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  font-family: "Roboto", sans-serif;
`;
