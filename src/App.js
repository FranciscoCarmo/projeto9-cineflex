import TopHeader from "./TopHeader";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Session from "./Session";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <TopHeader />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sessoes/:idFilme" element={<Session />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
