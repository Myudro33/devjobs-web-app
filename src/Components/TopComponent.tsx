import React from "react";
import styled from "styled-components";
import data from "../assets/data.json";

interface TopComponentProps {
  theme: boolean;
  info: typeof data;
}

const TopComponent = ({ info, theme }: TopComponentProps) => {
  return (
    <Container theme={theme ? "#19202d" : "#fff"}>
      <ImageContainer style={{ backgroundColor: info[0].logoBackground }}>
        <Image
          src={`https://mcornale-devjobs-web-app.netlify.app${info[0].logo.slice(
            1,
            info[0].logo.length
          )}`}
          alt=""
        />
      </ImageContainer>
      <RightContainer>
        <TitleContainer>
          <CompanyTitle theme={theme?'#fff':'#000'} >{info[0].company}</CompanyTitle>
          <CompanySite>{info[0].website}</CompanySite>
        </TitleContainer>
        <Button
        hover={theme?'#545963':'#b9bbe9;'}
          color={theme ? "#fff" : "#5964e0;"}
          theme={theme ? "#303642" : "#eeeffc"}
          href={info[0].website}
          target="_blank"
        >
          Company Site
        </Button>
      </RightContainer>
    </Container>
  );
};

export default TopComponent;

const Button = styled.a`
  width: 140px;
  height: 52px;
  background-color: ${(props) => props.theme};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.color};
  font-weight: 700;
  border-radius: 5px;
  &:hover {
    background-color: ${props=>props.hover};
    transition: 0.3s;
  }
  @media screen and (max-width: 770px) {
    margin-top: 10px;
  }
`;
const CompanySite = styled.p`
  font-size: 18px;
`;

const CompanyTitle = styled.h2`
  color: ${props=>props.theme};
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 80%;
  justify-content: space-between;
  @media screen and (max-width: 770px) {
    height: 40%;
    justify-content: center;
    align-items: center;
  }
`;
const RightContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  @media screen and (max-width: 770px) {
    flex-direction: column;
    padding: 0px;
    height: 150px;
  }
`;

const Image = styled.img`
  height: 25px;
  @media screen and (max-width: 770px) {
    height: 15px;
  }
`;
const ImageContainer = styled.div`
  width: 140px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 0px 0px 10px;
  @media screen and (max-width: 770px) {
    border-radius: 10px;
    width: 80px;
    height: 80px;
    transform: translateY(-30px);
  }
`;
const Container = styled.div`
  background-color: ${(props) => props.theme};
  width: 100%;
  height: 143px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 770px) {
    flex-direction: column;
    height: 250px;
    justify-content: flex-start;
  }
`;
