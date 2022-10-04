import React, { useEffect, useState } from 'react'
import Main from '../components/Main'


const Home = () => {
   const [index, setIndex] = useState(0)

  const slides =[ 
    {
      "id": 1,
      "img": "https://i.postimg.cc/nVD809wq/homepage.jpg",
      "title": "Create your Space",
      "text": "investing in good interior design adds value in the long run. An interior designer is well aware of the types of fixtures, lighting, drapes, paint, sofa designs and carpeting that you should put in various parts of a house"
    },
    {
      "id": 2,
      "img": "https://i.postimg.cc/ZnGvPvnT/homepage1.jpg",
      "title": "Create your Space",
      "text": "investing in good interior design adds value in the long run. An interior designer is well aware of the types of fixtures, lighting, drapes, paint, sofa designs and carpeting that you should put in various parts of a house"
    },
    {
      "id": 3,
      "img": "https://i.postimg.cc/9Qjqr9sb/homepage2.jpg",
      "title": "Create your Space",
      "text": "investing in good interior design adds value in the long run. An interior designer is well aware of the types of fixtures, lighting, drapes, paint, sofa designs and carpeting that you should put in various parts of a house"
    },
    {
      "id": 4,
      "img": "https://i.postimg.cc/PqSL3RJV/homepage3.jpg",
      "title": "Create your Space",
      "text": "investing in good interior design adds value in the long run. An interior designer is well aware of the types of fixtures, lighting, drapes, paint, sofa designs and carpeting that you should put in various parts of a house"
    }
  ]

  const {img, text, title} = slides[index]


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
    <main>
      <Main slides={slides}/>
      {/* <Main content={content[index]}  /> */}
      {/* {content} */}
    {/* {content.map((obj)=>
    <Main key={obj.id} obj={obj} />
    )} */}
    </main>
    </>
  )
}

export default Home