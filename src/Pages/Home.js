import React from "react";
import styled from "styled-components";
import List from "../Component/List";

const movieList = [
  { title: "오늘 대한민국 TOP 시리즈", type: "top_rated" },
  { title: "새로운 시리즈", type: "now_playing" },
  { title: "몰아보기 추천 시리즈", type: "popular" },
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
  padding-top: 4rem;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;
