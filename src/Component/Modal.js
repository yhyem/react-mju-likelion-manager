import React from "react";
import styled from "styled-components";
import arrow from "../img/arrow.png";
import good from "../img/good.png";

const Modal = (props) => {
  const { open, close, title, image } = props;
  const RightData = [
    { title: "출연", cont: "탄지로, 누구누구, 누구누구" },
    { title: "장르", cont: "소년만화" },
    { title: "시리즈 특징", cont: "어두운" },
  ];

  return (
    <ModalBlock>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <Section>
            <Header>
              <BtnClose onClick={close}>&times;</BtnClose>
            </Header>
            <ContImg
              style={{
                background: `linear-gradient(
                        to right,
                        rgba(20, 20, 20, 1) 10%,
                        rgba(20, 20, 20, 1) 25%,
                        rgba(20, 20, 20, 1) 30%,
                        rgba(20, 20, 20, 0) 50%,
                        rgba(20, 20, 20, 1) 70%,
                        rgba(20, 20, 20, 1) 75%,
                        rgba(20, 20, 20, 1) 100%
                      ), src(${image}}) no-repeat center `,
              }}
            ></ContImg>
            <WrapBtn>
              <StartBtn>► 재생</StartBtn>
              <CircleBtn1 src={arrow}></CircleBtn1>
              <CircleBtn2 src={good}></CircleBtn2>
            </WrapBtn>
            <Content>
              <LeftCont>
                <LeftContTop>2022 에피소드 8개</LeftContTop>
                <LeftTitle>{title}</LeftTitle>
                <LeftSubCont>
                  마침내 탄지로의 칼날이 버려졌다! 피에 굶주린 혈귀의 습격으로
                  가족을 잃고 여동생마저 저주에 걸린 소년. 가혹한 운명을 끊고
                  세상에서 혈귀를 멸하러, 지금 탄지로가 복수의 칼날을 높이든다.
                </LeftSubCont>
              </LeftCont>
              <WrapRightCont>
                {RightData.map((r, index) => (
                  <RightCont key={index}>
                    <ContTitle>{r.title} &nbsp;</ContTitle> {r.cont}
                  </RightCont>
                ))}
              </WrapRightCont>
            </Content>
          </Section>
        ) : null}
      </div>
    </ModalBlock>
  );
};

export default Modal;

const ModalBlock = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .openModal {
    display: flex;
    align-items: center;
    animation: 0.3s;
  }

  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Section = styled.div`
  width: 55%;
  height: 700px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #181818;
  animation: 0.3s;
  overflow: hidden;
`;

const Header = styled.div`
  position: relative;
`;

const BtnClose = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: rgba(0, 0, 0, 0.6);
  border-radius: 100%;
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 35px;
  font-weight: lighter;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.9);
`;

const ContImg = styled.div`
  width: 100%;
  height: 500px;
`;

const WrapBtn = styled.div`
  display: flex;
`;

const StartBtn = styled.button`
  font-size: 18px;
  border-radius: 5px;
  border: none;
  width: 7.5rem;
  height: 2.5rem;
  position: absolute;
  top: 27rem;
  left: 23rem;
  background-color: white;
`;

const CircleBtn1 = styled.img`
  position: absolute;
  top: 27rem;
  left: 31rem;
  border-radius: 100%;
  border: none;
  border: 1px solid #ffffff50;
  background-color: #00000050;
  width: 40px;
  height: 40px;
`;

const CircleBtn2 = styled.img`
  position: absolute;
  top: 27rem;
  left: 34rem;
  border-radius: 100%;
  border: 1px solid #ffffff50;
  background-color: #00000050;
  width: 40px;
  height: 40px;
`;

const Content = styled.div`
  display: flex;
`;

const LeftCont = styled.div`
  width: 50%;
  white-space: normal;
  margin-left: 3rem;
`;

const LeftContTop = styled.div`
  font-size: 17px;
  margin-bottom: 1rem;
`;

const LeftTitle = styled.div`
  margin-bottom: 1rem;
`;

const LeftSubCont = styled.div`
  font-size: 17px;
`;

const RightCont = styled.div`
  display: flex;
  padding: 0.3rem;
`;

const WrapRightCont = styled.div`
  margin-left: auto;
  margin-right: 3rem;
  font-size: 15px;
  display: block;
`;

const ContTitle = styled.div`
  color: #717171;
`;
