import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import styled from "styled-components";
import "./index.css";

const App = () => {
  const [theme, settheme] = useState(false);

  return (
    <Container theme={theme ? "#121721" : "#f4f6f8"}>
      <Navbar theme={theme} settheme={settheme} />
    </Container>
  );
};

export default App;

const Container = styled.div<any>`
  background-color: ${(props) => props.theme};
  height: 500px;
`;
