import React, { useState } from 'react';
import styled from "styled-components";

const Background = styled.section`
  width: 100%;
  height: 100%;
//   background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
//   justify-content: center;
//   align-items: center;
`;
const ModalWrapper = styled.div`
  width: 100%;
  background: #013220;
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
  border-radius: 20px;
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
    // console.log(content.content)

    const [index , setIndex] = useState(0)
    console.log(index)
    // const { title, text, img} = obj[index]


    // const leftArrow ={
    //     position: 'absolute',
    //     top: '50%',
    //     transform: 'translate(0, -50%)',
    //     left: '32px',
    //     fontSize: '45px',
    //     color: '#fff',
    //     zIndex:1,
    //     cursor: 'pointer',
    // }

    //   const rightArrow = {
    //     position: "absolute",
    //     top: "50%",
    //     transform: "translate(0, -50%)",
    //     right: "32px",
    //     fontSize: "45px",
    //     color: "#fff",
    //     zIndex: 1,
    //     cursor: "pointer",
    //   };

  return (
    <>
      {/* <Background> */}
      {/* <div style={leftArrow}>❰</div>
      <div style={rightArrow}>❱</div> */}
      <ModalWrapper>
        <ModalContent>
          <h1>{slides[index].title}</h1>
          <p>{slides[index].text}</p>
        </ModalContent>
        <ModalImg src={slides[index].img} alt="oh it worked" />
      </ModalWrapper>
      <br />
      {/* </Background> */}
    </>
  );
}

export default Main