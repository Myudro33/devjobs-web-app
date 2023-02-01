import React from "react";
import styled from "styled-components";
import data from "../assets/data.json";

interface BottomProps {
  theme: boolean;
  info: typeof data;
}

const Bottom = ({ theme, info }) => {
  return (
    <Container theme={theme ? "#19202d" : "#fff"}>
      <Wrapper>
        <TitleContainer>
          <Title theme={theme ? "#fff" : "#000"}>{info[0].position}</Title>
          <Company>{info[0].company}</Company>
        </TitleContainer>
        <Button target='_blank' href={info[0].apply}>Apply Now</Button>
      </Wrapper>
    </Container>
  );
};

export default Bottom;

const Button = styled.a`
  width: 140px;
  height: 52px;
  background-color: #5964e0;
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  @media screen and (max-width:770px) {
    width: 100%;
  }
`;
const Company = styled.p``;

const Title = styled.h3`
  color: ${(props) => props.theme};
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 770px) {
    width: 100%;
    padding: 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 112px;
  background-color: ${(props) => props.theme};
  display: flex;
  justify-content: center;
  align-items: center;
`;
