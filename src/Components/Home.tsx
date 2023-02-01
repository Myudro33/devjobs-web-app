import React, { useEffect, useState } from "react";
import Input, { SearchButton } from "./Input";
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
  const [allCards, setallCards] = useState(false);



  useEffect(() => {
    if (!allCards) {
      setstore(store.filter((item) => item.id < 10));
    } else {
      if (!fullTimeChecked) {
        setstore(data);
      }
    }
  }, [allCards]);

  useEffect(() => {
    setstore(data);
    setallCards(true)
    if (titleFilter !== "") {
      setstore(
        store.filter(
          (item) =>
            item.position.toLowerCase().startsWith(titleFilter) ||
            item.company.toLowerCase().startsWith(titleFilter)
        )
      );
    }
  }, [titleFilter]);
  useEffect(() => {
    setstore(data)
    if(locationFilter!==''){
      setstore(store.filter((item)=>item.location.toLowerCase().startsWith(locationFilter)))
    }
  }, [locationFilter]);

  return (
    <Container>
      <Input
        setallCards={setallCards}
        store={store}
        setstore={setstore}
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
        <ExpandButtonWrapper>
          {!allCards && (
            <ExpandButton onClick={() => setallCards(true)}>
              Load More
            </ExpandButton>
          )}
        </ExpandButtonWrapper>
      </Wrapper>
    </Container>
  );
};

export default Home;

const ExpandButtonWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ExpandButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: #5964e0;
  color: white;
  border-radius: 5px;
  font-weight: 700;
  font-size: 16px;
  margin: auto;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  min-height: 70vh;
  height: auto;
  justify-content: center;
  padding: 80px 0px;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
