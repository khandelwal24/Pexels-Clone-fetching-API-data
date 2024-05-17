import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import axios from 'axios'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './Components/Home'
import Saved from './Components/Saved'
import { data } from 'autoprefixer'


function App() {
  const API_KEY = 'P7p0vSLxQxLq0dbdYa0DDMFKkGIqU7Uj80JLe4WHZvydMaCQufHL36ae';
  const[images,setImages] = useState([]);
  const[search,setSearch] = useState('car');
  const[saved,setSaved] = useState([]);



  useEffect(()=>{
    const fetchImg = async () =>{
      const res = await axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers:{
            Authorization:API_KEY
          }
        }
      );

      // console.log('resposne : ' ,res.data.photos);
      setImages(res.data.photos);
      console.log(images);
    }
    const D = JSON.parse(localStorage.getItem('Images'));
    if(D){
      setSaved(D);
    }
    fetchImg();

  },[search]);

  useEffect(()=>{
    if(saved.length!=0){
      const json = JSON.stringify(saved);
      localStorage.setItem('Images',json);
    }
  },[saved])

  console.log('Img is saved',saved);



  

  return (
    <>

      <BrowserRouter>
      <Navbar SS={setSearch}/>
        <Routes>
          <Route path='/' element={<Home ii = {images} saved={saved} setSaved={setSaved} />} />
          <Route path='/saved' element={<Saved saved={saved} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
