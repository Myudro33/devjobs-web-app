import React from "react";
import "animate.css";
import styled from "styled-components";
import locationIcon from "../assets/desktop/icon-location.svg";
import {
  FullTimeCheckbox,
  FullTimeContainer,
  FullTimeTitle,
  LocationIcon,
  MiddleInput,
  SearchButton,
} from "./Input";

interface MoreOptionsProps {
  theme: boolean;
  setfullTimeChecked: React.Dispatch<React.SetStateAction<boolean>>;
  fullTimeChecked: boolean;
  setmoreOptions: React.Dispatch<React.SetStateAction<boolean>>;
  setlocationFilter: React.Dispatch<React.SetStateAction<string>>;
  locationFilter: string;
}

const MoreOptions = ({
  theme,
  fullTimeChecked,
  setfullTimeChecked,
  setmoreOptions,
  locationFilter,
  setlocationFilter,

}: MoreOptionsProps) => {
  return (
    <Container>
      <Wrapper
        theme={theme ? "#19202d" : "#fff"}
        className="animate__animated animate__bounceInUp"
      >
        <LocationInputWrapper>
          <LocationIcon src={locationIcon} />
          <Input
            value={locationFilter}
            onChange={(e) => setlocationFilter(e.target.value)}
            theme={theme ? "#fff" : "#19202d"}
            type="text"
            placeholder="Filter by location..."
          />
        </LocationInputWrapper>
        <FullTimeInputWrapper
          onClick={() => setfullTimeChecked(!fullTimeChecked)}
        >
          <FullTimeCheckbox
            checked={fullTimeChecked}
            onChange={() => setfullTimeChecked(!fullTimeChecked)}
            type="checkbox"
          />
          <Tilte theme={theme ? "#fff" : "#19202d"}>Full Time</Tilte>
        </FullTimeInputWrapper>
        <Button onClick={() => setmoreOptions(false)}>Search</Button>
      </Wrapper>
    </Container>
  );
};

export default MoreOptions;

const Tilte = styled(FullTimeTitle)`
  margin-left: 10px;
  font-size: 18px;
`;

const Input = styled(MiddleInput)`
  width: 95%;
  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

const LocationInputWrapper = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const FullTimeInputWrapper = styled(FullTimeContainer)`
  display: flex;
  height: 80px;
  padding: 20px;
  border-top: 2px solid #d9d9d940;
  width: 100%;
  justify-content: flex-start;
`;

const Button = styled(SearchButton)`
  display: flex;
  width: 95%;
  margin: auto;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 250px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme};
  border-radius: 5px;
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000030;
`;
