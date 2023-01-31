import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import 'animate.css';

interface JobCardProps {
  id: number;
  company: string;
  contract: string;
  location: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  theme: boolean;
}

const JobCard = ({
  theme,
  company,
  id,
  contract,
  location,
  logo,
  logoBackground,
  position,
  postedAt,
}: JobCardProps) => {
  const background = logoBackground.slice(0, logoBackground.length - 1);

  return (
    <Container className='animate__animated animate__fadeIn' theme={theme ? "#19202d" : "#fff"}>
      <ImgWrapper style={{ backgroundColor: background }}>
        <img
          src={`https://mcornale-devjobs-web-app.netlify.app${logo.slice(
            1,
            logo.length
          )}`}
          alt="img"
        />
      </ImgWrapper>
      <ContractTitle>{`${postedAt} · ${contract}`}</ContractTitle>
      <Link to={`${id}`}>
        <PositionTitle theme={theme ? "#fff" : "#19202d"}>
          {position}
        </PositionTitle>
      </Link>
      <Name>{company}</Name>
      <Location>{location}</Location>
    </Container>
  );
};

export default JobCard;

const Location = styled.h4`
  margin-top: 30px;
`;
const Name = styled.p`
  transform: translateY(-10px);
`;
const PositionTitle = styled.h3`
  transform: translateY(-20px);
  color: ${(props) => props.theme};
  &:hover{
    color:#6e8098
  }
`;
const ContractTitle = styled.p`
  transform: translateY(-30px);
`;
const ImgWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  transform: translateY(-50px);
`;

const Container = styled.div`
  width: 350px;
  height: 237px;
  margin: 30px 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme};
  @media screen and (max-width: 820px) {
    margin: 30px 10px;
    width: 340px;
  }
  @media screen and (max-width: 770px) {
    width: 100%;
  }
`;
