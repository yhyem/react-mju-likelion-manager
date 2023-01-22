import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import alarm from "../img/alarm.png";
import profile from "../img/profile.png";
import search from "../img/search.png";

const Header = () => {
  return (
    <HeaderDiv>
      <Logo src={logo} />
      <RouteDiv>홈</RouteDiv>
      <RouteDiv>시리즈</RouteDiv>
      <RouteDiv>영화</RouteDiv>
      <RouteDiv>NEW! 요즘 대세 콘텐츠</RouteDiv>
      <RouteDiv>내가 찜한 콘텐츠</RouteDiv>
      <RouteDiv>언어별로 찾아보기</RouteDiv>
      <RightDiv>
        <ImgDiv src={search}></ImgDiv>
        <ImgDiv src={alarm}></ImgDiv>
        <Profile src={profile}></Profile>
      </RightDiv>
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  background-color: black;
`;

const Logo = styled.img`
  width: 5.5rem;
  margin: 1rem 0;
  padding-left: 3rem;
  padding-right: 2rem;
`;

const RightDiv = styled.div`
  margin-left: auto;
`;

const RouteDiv = styled.div`
  color: white;
  margin: 1.2rem 0.8rem;
  font-size: 0.9rem;
`;

const ImgDiv = styled.img`
  margin: 1.7rem 0;
  padding: 0 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
`;

const Profile = styled.img`
  margin: 0.7rem 0;
  width: 5rem;
  padding-right: 3rem;
`;
