import React from "react";
import styled from "styled-components";
import searchIcon from "../assets/desktop/icon-search.svg";
import locationIcon from "../assets/desktop/icon-location.svg";
import locationIconMobile from "../assets/mobile/icon-search.svg";
import moreOptionsIcon from "../assets/mobile/icon-filter.svg";

interface InputProps {
  theme: boolean;
  setfullTimeChecked: React.Dispatch<React.SetStateAction<boolean>>;
  fullTimeChecked: boolean;
  setmoreOptions: React.Dispatch<React.SetStateAction<boolean>>;
  titleFilter: string;
  settitleFilter: React.Dispatch<React.SetStateAction<string>>;
  setlocationFilter: React.Dispatch<React.SetStateAction<string>>;
  locationFilter: string;
}

const Input = ({
  theme,
  fullTimeChecked,
  setfullTimeChecked,
  setmoreOptions,
  settitleFilter,
  titleFilter,
  locationFilter,
  setlocationFilter,
}: InputProps) => {
  return (
    <Container theme={theme ? "#19202d" : "#fff"}>
      <LeftContainer>
        <SearchIcon src={searchIcon} alt="searchicon" />
        <LeftInput
          value={titleFilter}
          onChange={(e) => settitleFilter(e.target.value)}
          theme={theme ? "#fff" : "#19202d"}
          type="text"
          placeholder="Filter by title, companies, expertise..."
        />
      </LeftContainer>
      <MiddleContainer>
        <LocationIcon src={locationIcon} alt="locationicon" />
        <MiddleInput
          value={locationFilter}
          onChange={(e) => setlocationFilter(e.target.value)}
          theme={theme ? "#fff" : "#19202d"}
          type="text"
          placeholder="Filter by location..."
        />
      </MiddleContainer>
      <FullTimeContainer onClick={() => setfullTimeChecked(!fullTimeChecked)}>
        <FullTimeCheckbox
          checked={fullTimeChecked}
          onChange={() => setfullTimeChecked(!fullTimeChecked)}
          type="checkbox"
        />
        <FullTimeTitle theme={theme ? "#fff" : "#19202d"}>
          Full Time Only
        </FullTimeTitle>
      </FullTimeContainer>
      <SearchOptions
        onClick={() => setmoreOptions(true)}
        src={moreOptionsIcon}
      />
      <SearchButton>Button</SearchButton>
      <SearchButtonMobile>
        <SearchIconMobile src={locationIconMobile} alt="" />
      </SearchButtonMobile>
    </Container>
  );
};

export default Input;

const SearchIconMobile = styled.img`
  width: 24px;
  height: 24px;
`;

const SearchOptions = styled.img`
  display: none;
  width: 25px;
  height: 25px;
  margin: auto 15px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const SearchButton = styled.button`
  width: 140px;
  height: 52px;
  background-color: var(--color-violet);
  color: white;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-weight: 600;
  font-size: 18px;
  margin-right: 30px;
  @media screen and (max-width: 820px) {
    margin-right: 10px;
    font-size: 15px;
    width: 200px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FullTimeTitle = styled.p`
  color: ${(props) => props.theme};
  font-size: 16px;
  font-weight: 600;
  @media screen and (max-width: 820px) {
    font-size: 11px;
  }
`;

export const FullTimeCheckbox = styled.input`
  accent-color: #313743;
  width: 25px;
  height: 25px;
  outline: red;
  &:checked {
    accent-color: var(--color-violet);
  }
  &:active {
    scale: 0.8;
  }
`;
export const FullTimeContainer = styled.div`
  width: 210px;
  height: 100%;
  padding: 20px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 820px) {
    padding: 10px;
  }
`;

export const MiddleInput = styled.input`
  width: 85%;
  font-size: 18px;
  color: ${(props) => props.theme};
`;

export const LocationIcon = styled.img`
  width: 17px;
  height: 24px;
`;
const MiddleContainer = styled.div`
  width: 340px;
  height: 100%;
  padding: 20px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-right: 2px solid #6e809820;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 820px) {
    padding: 10px;
  }
`;

const LeftInput = styled.input`
  width: 85%;
  height: 40px;
  font-size: 18px;
  color: ${(props) => props.theme};
`;
const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 440px;
  height: 100%;
  padding: 20px 32px;
  border-right: 2px solid #6e809820;
  @media screen and (max-width: 768px) {
    width: 90%;
    border: none;
  }
  @media screen and (max-width: 820px) {
    padding: 10px;
  }
`;
const Container = styled.div`
  transform: translateY(-30px);
  display: flex;
  width: 80%;
  height: 80px;
  border-radius: 5px;
  background-color: ${(props) => props.theme};
  @media screen and (max-width: 820px) {
    width: 90%;
  }
`;

const SearchButtonMobile = styled(SearchButton)`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100px;
  }
`;
