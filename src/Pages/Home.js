import React from "react";
import styled from "styled-components";
import List from "../Component/List";

const movieList = [
  { title: "오늘 대한민국 TOP 시리즈", type: "Top" },
  { title: "새로운 시리즈", type: "Popular" },
  { title: "몰아보기 추천 시리즈", type: "Upcoming" },
];

const Home = () => {
  return (
    <HomeDiv>
      {movieList.map((m, index) => (
        <List title={m.title} type={m.type} key={index}></List>
      ))}
    </HomeDiv>
  );
};

export default Home;

const HomeDiv = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  background-color: black;
`;
