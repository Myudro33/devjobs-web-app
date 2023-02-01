import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../assets/data.json";
import styled from "styled-components";
import TopComponent from "./TopComponent";
import BotComponent from "./BotComponent";
import Bottom from "./Bottom";

interface JobInfoProps {
  theme: boolean;
}


const JobInfo = ({ theme }: JobInfoProps) => {
  const { id } = useParams();
  const [info, setinfo] = useState<typeof data>(data);

  useEffect(() => {
    setinfo(data.filter((item) => item.id === Number(id)));
  }, [id]);

  return (
    <Container>
      <Wrapper>
       <TopComponent info={info} theme={theme}  />
       <BotComponent info={info} theme={theme}  />
      </Wrapper>
      <Bottom theme={theme} info={info} />
    </Container>
  );
};

export default JobInfo;


const Wrapper = styled.div`
  width: 57%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateY(-40px);
  @media screen and (max-width:820px) {
    width: 90%;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
