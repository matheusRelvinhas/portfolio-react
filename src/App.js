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

  const [darkMode, setDarkMode] = useState(false);

  const [dataCss, setDataCss] = useState({
    background: '#bfbfbf',
    color: '#101010'
  });

  const handleCheckboxChange = (event) => {
    setDarkMode(event.target.checked);
    if(darkMode === false) {
      setDataCss({
        background:'#262626',
        color:'ccc'
      })
    } else {
      setDataCss({
        background:'#bfbfbf',
        color:'101010'
      })
    }
    console.log(dataCss.background)
  };
  
  const [dataState, setDataState] = useState({
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
    darkMode,
    handleCheckboxChange,
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
