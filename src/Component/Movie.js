import React from "react";
import styled from "styled-components";

const Movie = (props) => {
  const { img } = props;

  return <TitleImg src={img}></TitleImg>;
};

export default Movie;

const TitleImg = styled.img`
  width: 235px;
  height: 140px;
  border-radius: 2%;
  margin: 1rem 0.2rem;
`;
