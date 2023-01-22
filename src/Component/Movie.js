import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Movie = (props) => {
  const { img } = props;
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
      <TitleImg src={img} onClick={() => openModal()}></TitleImg>
      <Modal
        open={ModalOpen}
        close={closeModal}
        title="귀멸의 칼날"
        image={img}
      ></Modal>
    </>
  );
};

export default Movie;

const TitleImg = styled.img`
  width: 235px;
  height: 140px;
  border-radius: 2%;
  margin: 1rem 0.2rem;
`;
