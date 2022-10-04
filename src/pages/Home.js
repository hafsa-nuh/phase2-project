import React, { useEffect, useState } from 'react'
import Main from '../components/Main'
import Header from '../components/Header';


const Home = () => {

  const slides = [
    {
      id: 1,
      img: "https://i.postimg.cc/7hKY6t5T/home4.jpg",
      title: "Create your Space",
      text: "investing in good interior design adds value in the long run. An interior designer is well aware of the types of fixtures, lighting, drapes, paint, sofa designs and carpeting that you should put in various parts of a house",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/KYfw31PC/homepage6.jpg",
      title: "Create your Space",
      text: "investing in good interior design adds value in the long run. An interior designer is well aware of the types of fixtures, lighting, drapes, paint, sofa designs and carpeting that you should put in various parts of a house",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/Gtvgx90F/homepage7.jpg",
      title: "Create your Space",
      text: "investing in good interior design adds value in the long run. An interior designer is well aware of the types of fixtures, lighting, drapes, paint, sofa designs and carpeting that you should put in various parts of a house",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/PqSL3RJV/homepage3.jpg",
      title: "Create your Space",
      text: "investing in good interior design adds value in the long run. An interior designer is well aware of the types of fixtures, lighting, drapes, paint, sofa designs and carpeting that you should put in various parts of a house",
    },
  ];

  // const [content, setContent] = useState([]);
  // const [index , setIndex]= useState(0)
  // const {img, title, text} = content[index]
  // console.log(img)
  // console.log(content) 
  
//   useEffect(()=>{
//    fetch("http://localhost:3000/home")
//     .then(r=> r.json())
//     .then(data=> setContent(data))
//   },[])
//  console.log(content[index])

  return (
    <>
    <header>
      <Main slides={slides}/>
      {/* <Main content={content[index]}  /> */}
      {/* {content} */}
    {/* {content.map((obj)=>
    <Main key={obj.id} obj={obj} />
    )} */}
    </header>
    </>
  )
}

export default Home