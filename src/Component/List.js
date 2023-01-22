import React from "react";
import styled from "styled-components";
import Top from "./Top";
import Movie from "./Movie";
import sample from "../img/movie.png";
import icon1 from "../img/1.png";
import icon2 from "../img/2.png";
import icon3 from "../img/3.png";
import icon4 from "../img/4.png";
import icon5 from "../img/5.png";
import icon6 from "../img/6.png";

const sampleData = [
  { index: 1, img: sample, rank: icon1 },
  { index: 2, img: sample, rank: icon2 },
  { index: 3, img: sample, rank: icon3 },
  { index: 4, img: sample, rank: icon4 },
  { index: 5, img: sample, rank: icon5 },
  { index: 6, img: sample, rank: icon6 },
];

const List = (props) => {
  const { title, type } = props;
  return (
    <ListDiv>
      {title}
      <WrapCont>
        {type === "Top"
          ? sampleData.map((s, index) => (
              <Top img={s.img} index={s.index} key={index} rank={s.rank} />
            ))
          : sampleData.map((s, index) => <Movie img={s.img} key={index} />)}
      </WrapCont>
    </ListDiv>
  );
};

export default List;

const ListDiv = styled.div`
  color: white;
  font-size: 1.3rem;
  padding: 1rem 3rem;
`;

const WrapCont = styled.div`
  display: flex;
  overflow: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;
