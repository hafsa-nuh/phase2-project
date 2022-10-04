import React, { useState } from 'react';
import styled from "styled-components";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"

const Background = styled.main`
  margin-right: 10px
  position: fixed;
  display: flex;
  // width: 100%;
  // hight: 100%;
`;
const ModalWrapper = styled.div`
  width: 100%;
  hight: 100%;
  background: #013220;
  //   grey #404040 / #484848
  //   blue #075264
  color: #000;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: 10;
  border-radius: 20px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius:0 20px 20px 0;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  h1 {
    color: #fff;
    text-align: center;
  }

  p {
    color: #fff;
    text-align: center;
    justify-content: center;
    padding: 2px;
  }
`;

const Main = ({slides}) => {
  const [index, setIndex] = useState(0);
  const { img, text, title } = slides[index];
  // console.log(index)

  //  style for the div
  const slider = {
    marginLeft: "auto",
    marginRight: "auto",
  };

  // function to fix the number greater than my array
  const checkNumber = (number) => {
    if (number > slides.length - 1) {
      return 0;
    }
    if (number < 0) {
      return slides.length - 1;
    }
    return number;
  };

  // finctionally button next
  const nextIndex = () => {
    setIndex((currentIndex) => {
      let newItem = currentIndex + 1;
      return checkNumber(newItem);
    });
  };
  //   the prev button
  const prevIndex = () => {
    setIndex((currentIndex) => {
      let newItem = currentIndex - 1;
      return checkNumber(newItem);
    });
  };

  return (
    <>
      <Background>
        <ModalWrapper>
          <ModalContent>
            <h1>{title}</h1>
            <p>{text}</p>
          </ModalContent>
          <ModalImg src={img} alt="oh it worked" />
          <div style={slider}>
            <button
              style={{
                color: " white",
                fontSize: "1.35rem",
                background: "transparent",
                borderColor: "transparent",
                margin: "0 5rem",
                transition: "var(--transition)",
                cursor: "pointer",
              }}
              onClick={prevIndex}
            >
              <FaChevronLeft />
            </button>
            <button
              style={{
                color: " white",
                fontSize: "1.35rem",
                background: "transparent",
                borderColor: "transparent",
                margin: "0 1rem",
                transition: "var(--transition)",
                cursor: "pointer",
              }}
              onClick={nextIndex}
            >
              <FaChevronRight />
            </button>
          </div>
        </ModalWrapper>
        <br />
      </Background>
    </>
  );
}

export default Main