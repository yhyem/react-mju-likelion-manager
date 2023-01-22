import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Top = (props) => {
  const { img, rank } = props;
  const [clicked, setClicked] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false);

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
        <RankDiv src={rank} />
        <ImgDiv src={img} />
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
