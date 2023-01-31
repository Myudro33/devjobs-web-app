import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import styled from "styled-components";
import "./index.css";
import Input from "./Components/Input";
import MoreOptions from "./Components/MoreOptions";

const App = () => {
  const [theme, settheme] = useState(true);
  const [fullTimeChecked, setfullTimeChecked] = useState(false);
  const [moreOptions, setmoreOptions] = useState(false);
  const [titleFilter, settitleFilter] = useState<string>("");
  const [locationFilter, setlocationFilter] = useState<string>("");

  return (
    <Container theme={theme ? "#121721" : "#f4f6f8"}>
      <Navbar theme={theme} settheme={settheme} />
      <Input
        setlocationFilter={setlocationFilter}
        locationFilter={locationFilter}
        titleFilter={titleFilter}
        settitleFilter={settitleFilter}
        setmoreOptions={setmoreOptions}
        theme={theme}
        fullTimeChecked={fullTimeChecked}
        setfullTimeChecked={setfullTimeChecked}
      />
      {moreOptions && (
        <MoreOptions
          setlocationFilter={setlocationFilter}
          locationFilter={locationFilter}
          setmoreOptions={setmoreOptions}
          fullTimeChecked={fullTimeChecked}
          setfullTimeChecked={setfullTimeChecked}
          theme={theme}
        />
      )}
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: ${(props) => props.theme};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
