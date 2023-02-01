import React from "react";
import styled from "styled-components";
import data from "../assets/data.json";

interface BotComponentProps {
  theme: boolean;
  info: typeof data;
}

const BotComponent = ({ info, theme }: BotComponentProps) => {
  console.log(info);

  return (
    <Container theme={theme ? "#19202d" : "#fff"}>
      <TopContainer>
        <TopLeft>
          <Contract>{`${info[0].postedAt} · ${info[0].contract}`}</Contract>
          <Position theme={theme ? "#fff" : "#19202d"}>
            {info[0].position}
          </Position>
          <Location>{info[0].location}</Location>
        </TopLeft>
        <Apply href={info[0].apply} target="_blank">
          Apply Now
        </Apply>
      </TopContainer>
      <Description>{info[0].description}</Description>
      <RequirementsTitle theme={theme ? "#fff" : "#19202d"}>
        Requirements
      </RequirementsTitle>
      <RequirementsContent>{info[0].requirements.content}</RequirementsContent>
      <RequirementContainer>
        {info[0].requirements.items.map((item) => (
          <li>{item}</li>
        ))}
      </RequirementContainer>
      <RequirementsTitle theme={theme ? "#fff" : "#19202d"}>
        What You Will Do
      </RequirementsTitle>
      <RequirementsContent>{info[0].role.content}</RequirementsContent>
      <RolesContainer>
        {info[0].role.items.map((item) => (
          <RolesLi>{item}</RolesLi>
        ))}
      </RolesContainer>
    </Container>
  );
};

export default BotComponent;

const RolesLi = styled.li`
margin: 10px 0px;
  &::marker {
    color: #5964e0;
    font-weight: 700;
  }
`;
const RolesContainer = styled.ol`
  width: 100%;
  height: auto;
  margin-top: 20px;
`;
const RequirementContainer = styled.ul`
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

const RequirementsContent = styled.p`
  margin-top: 20px;
`;

const RequirementsTitle = styled.h2`
  color: ${(props) => props.theme};
  margin-top: 50px;
`;

const Description = styled.p`
  margin-top: 50px;
`;

const Apply = styled.a`
  width: 140px;
  height: 52px;
  background-color: #5962e0;
  &:hover {
    background-color: #737ae3;
  }
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  @media screen and (max-width: 770px) {
    width: 100%;
  }
`;

const Location = styled.p`
  color: #5964e0;
  font-weight: 700;
`;

const Position = styled.h1`
  color: ${(props) => props.theme};
  margin: 10px 0px;
`;
const Contract = styled.p`
  font-weight: 700;
`;

const TopLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  @media screen and (max-width: 770px) {
    width: 100%;
    height: 60%;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 770px) {
    flex-direction: column;
    height: 226px;
    align-items: flex-end;
  }
`;
const Container = styled.div`
  width: 100%;
  padding: 48px;
  margin-top: 30px;
  background-color: ${(props) => props.theme};
  border-radius: 5px;
  @media screen and (max-width: 770px) {
    padding: 30px;
  }
`;
