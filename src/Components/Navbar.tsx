import React from "react";
import "../index.css";
import styled from "styled-components";
import logo from "../assets/desktop/logo.svg";
import sun from "../assets/desktop/icon-sun.svg";
import moon from "../assets/desktop/icon-moon.svg";

interface NavbarProps{
    theme:boolean;
    settheme: React.Dispatch<React.SetStateAction<boolean>>
}


const Navbar = ({settheme,theme}:NavbarProps) => {
  return (
    <Container>
      <Image src={logo} alt="logo" />
      <ThemeSwitcher>
        <Icon src={sun} alt="sun" />
        <CheckBoxWrapper>
          <CheckBox checked={theme} onChange={()=>settheme(!theme)} id="checkbox" type="checkbox" />
          <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
        <Icon src={moon} alt="moon" />
      </ThemeSwitcher>
    </Container>
  );
};

export default Navbar;

const Icon = styled.img``;

const ThemeSwitcher = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`;

const Image = styled.img``;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 150px;
  width: 100%;
  height: 170px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image:url("https://raw.githubusercontent.com/Myudro33/devjobs-web-app/806cc3917f3e7877f19a7e266bdda7128e06b820/src/assets/desktop/bg-pattern-header.svg"); ;
  @media screen and (max-width: 768px) {
    padding: 0px 30px;
    background-image: url("https://raw.githubusercontent.com/Myudro33/devjobs-web-app/806cc3917f3e7877f19a7e266bdda7128e06b820/src/assets/mobile/bg-pattern-header.svg");
  }
  @media screen and (max-width:820px) {
    padding: 0px 50px;
  }
`;

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 4px;
  left: 0;
  width: 52px;
  height: 25px;
  border-radius: 15px;
  background: #fff;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin: 5px;
    background-color: var(--color-violet);
    transition: 0.2s;
  }
  &:active {
    scale: 0.9;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 52px;
  height: 26px;

  &:checked + ${CheckBoxLabel} {
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 15px;
      height: 15px;
      margin: 5px;
      margin-left: 31px;
      transition: 0.2s;
    }
  }
`;
