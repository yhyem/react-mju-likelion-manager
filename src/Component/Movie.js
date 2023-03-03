import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Movie = (props) => {
  const { img } = props;
  const [clicked, setClicked] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false);
  const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    setClicked(false);
    document.body.style.overflow = "unset";
  };

  console.log(IMAGE_URL + img);

  return (
    <>
      <TitleImg
        src={img ? IMAGE_URL + img : ""}
        onClick={() => openModal()}
      ></TitleImg>
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
