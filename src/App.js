import React, { useState } from 'react';
import MyContext from './Context/MyContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';


function App() {
  
  const dataIcon = [ // incones do footer. Ifood, whats e intagram
    { //images 32x32
      icon: 'https://i.postimg.cc/Nf48x5WV/facebook-icon.webp',
      url: 'https://www.facebook.com/AluraCursosOnline/',
      alt: 'facebook'
    },
    {
      icon: 'https://i.postimg.cc/1XKFMjY6/twitter-icon.webp',
      url: 'https://twitter.com/AluraOnline/',
      alt: 'twitter'
    },
    {
      icon: 'https://i.postimg.cc/DwpqtRfP/instagram-icon.webp',
      url: 'https://www.instagram.com/aluraonline',
      alt: 'instagram'
    }
  ]

  const dataCss =  { // cor principal de fundo, header(banner) e footer 
    primaryColor: '#262626',
    secundaryColor: '#e8372d',
    logoImage: './img/react-icon.png',
    bannerImage: 'https://i.postimg.cc/1zLDz6qg/banner-aluraflix.webp'
  };
  
  const [dataState, setDataState] = useState({ // gerenciar estados pelo context.api
    title: 'title',
  });

  const addDataState = (value) =>  {
    const data = {
      title: value.title,
    }
    setDataState(data)
  }

  const sharedData = {
    dataCss,
    dataIcon,
    dataState,
    addDataState
  };

  return (
      <Router>
        <MyContext.Provider value={sharedData}>
          <Routes>
            <Route path='/' element={<HomePage />}/>
          </Routes>
        </MyContext.Provider>
      </Router>
  );
}

export default App;
