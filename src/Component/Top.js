import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import icon1 from "../img/1.png";
import icon2 from "../img/2.png";
import icon3 from "../img/3.png";
import icon4 from "../img/4.png";
import icon5 from "../img/5.png";
import icon6 from "../img/6.png";
import icon7 from "../img/7.png";
import icon8 from "../img/8.png";
import icon9 from "../img/9.png";
import icon10 from "../img/10.png";

const Top = (props) => {
  const { img, index } = props;
  console.log(index);
  const [clicked, setClicked] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false);
  const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

  const rankData = [
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10,
  ];

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    setClicked(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <TopDiv onClick={() => openModal()}>
        <RankDiv src={rankData[index]} />
        <ImgDiv src={img ? IMAGE_URL + img : ""} />
      </TopDiv>
      <Modal
        open={ModalOpen}
        close={closeModal}
        title="귀멸의 칼날"
        image={img}
      ></Modal>
    </>
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
