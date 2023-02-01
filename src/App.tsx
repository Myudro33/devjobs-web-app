import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import styled from "styled-components";
import "./index.css";
import Input from "./Components/Input";
import MoreOptions from "./Components/MoreOptions";
import { Routes, Route } from "react-router-dom";
import data from "./assets/data.json";
import Home from "./Components/Home";
import JobInfo from "./Components/JobInfo";

const App = () => {
  const [theme, settheme] = useState(false);
  const [store, setstore] = useState(data)

  return (
    <Container theme={theme ? "#121721" : "#f4f6f8"}>
      <Navbar theme={theme} settheme={settheme} />
      <Routes>
        <Route path={"/devjobs-web-app"} element={<Home theme={theme} store={store} setstore={setstore} />} />
        <Route path="/devjobs-web-app/:id" element={<JobInfo theme={theme} />} />
      </Routes>
    </Container>
  );
};

export default App;



const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
