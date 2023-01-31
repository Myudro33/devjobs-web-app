import React, { useState } from "react";
import Input from "./Input";
import MoreOptions from "./MoreOptions";
import styled from "styled-components";
import data from "../assets/data.json";
import JobCard from "./JobCard";

interface HomeProps {
  theme: boolean;
  store: typeof data;
  setstore: React.Dispatch<React.SetStateAction<typeof data>>;
}

const Home = ({ theme, store, setstore }: HomeProps) => {
  const [fullTimeChecked, setfullTimeChecked] = useState(false);
  const [moreOptions, setmoreOptions] = useState(false);
  const [titleFilter, settitleFilter] = useState<string>("");
  const [locationFilter, setlocationFilter] = useState<string>("");

  return (
    <Container>
      <Input
        theme={theme}
        setlocationFilter={setlocationFilter}
        locationFilter={locationFilter}
        titleFilter={titleFilter}
        settitleFilter={settitleFilter}
        setmoreOptions={setmoreOptions}
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
      <Wrapper>
        {store.map((item) => (
          <JobCard
          theme={theme}
            key={item.id}
            id={item.id}
            company={item.company}
            contract={item.contract}
            location={item.location}
            logo={item.logo}
            logoBackground={item.logoBackground}
            position={item.position}
            postedAt={item.postedAt}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  height: auto;
  padding: 80px 0px;
  border: 1px solid black;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
