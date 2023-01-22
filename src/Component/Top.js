import React from "react";
import styled from "styled-components";

const Top = (props) => {
  const { img, rank } = props;

  return (
    <TopDiv>
      <RankDiv src={rank} />
      <ImgDiv src={img} />
    </TopDiv>
  );
};

export default Top;

const TopDiv = styled.div`
  margin: 1rem 0.2rem;
  display: flex;
`;

const RankDiv = styled.img`
  width: 110px;
  height: 160px;
`;

const ImgDiv = styled.img`
  width: 110px;
  height: 160px;
`;
