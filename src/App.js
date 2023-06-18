import React, { useState, useRef } from 'react';
import MyContext from './Context/MyContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';

function App() {

  const carouselRef = useRef(null);

  const [englishMode, setEnglishMode] = useState(false);

  const [darkMode, setDarkMode] = useState(false);
  
  const initialStateDataLanguage = {
    about: 'Sobre',
    projects: 'Projetos',
    certificates: 'Certificados'
  };
  
  const [dataLanguage, setDataLanguage] = useState(initialStateDataLanguage);

  const initialStateDataCss = {
    background: '#f0f0f0',
    color: '#101010',
    carousel: '#bfbfbf',
    boxShadowHeader: 'inset 0 -10px 10px -10px rgba(0, 0, 0, 0.3)',
    boxShadowFooter: 'inset 0 10px 10px -10px rgba(0, 0, 0, 0.3)',
    dataIcon:[
        {
          icon: './img/github-icon-dark.png',
          url: 'https://github.com/matheusRelvinhas/',
          alt: 'github',
        },
        {
          icon: './img/linkedin-icon-dark.png',
          url: 'https://www.linkedin.com/in/relvinhasmatheus/',
          alt: 'linkedin',
        },
        {
          icon: './img/whatsapp-icon-dark.png',
          url: 'https://wa.me/5531971451910',
          alt: 'whatsapp',
        },
      ],
  };

  const [dataCss, setDataCss] = useState(initialStateDataCss);
  
  const goToSlide = (slideNumber) => {
    carouselRef.current.goTo(slideNumber, true);
  };
  
  const handleEnglishCheckboxChange = (event) => {
    setEnglishMode(event.target.checked);
    if (englishMode === false) {
      setDataLanguage({
        about: 'About',
        projects: 'Projects',
        certificates: 'Certificates'
      })
    } else {
      setDataLanguage(initialStateDataLanguage)
    }
    console.log(dataLanguage.about)
  }

  const handleDarkCheckboxChange = (event) => {
    setDarkMode(event.target.checked);
    if (darkMode === false) {
      setDataCss({
        background: '#262626',
        color: '#f5f5f5',
        carousel: '#595959',
        boxShadowHeader: 'inset 0 -10px 10px -10px rgba(225, 225, 225, 0.15)',
        boxShadowFooter: 'inset 0 10px 10px -10px rgba(225, 225, 225, 0.15)',
        dataIcon:[
          {
            icon: './img/github-icon-white.png',
            url: 'https://github.com/matheusRelvinhas/',
            alt: 'github',
          },
          {
            icon: './img/linkedin-icon-white.png',
            url: 'https://www.linkedin.com/in/relvinhasmatheus/',
            alt: 'linkedin',
          },
          {
            icon: './img/whatsapp-icon-white.png',
            url: 'https://wa.me/5531971451910',
            alt: 'whatsapp',
          },
        ],
      });
    } else {
      setDataCss(initialStateDataCss);
    }
    console.log(dataCss.background);
  };

  const sharedData = {
    carouselRef,
    dataLanguage,
    dataCss,
    englishMode,
    darkMode,
    goToSlide,
    handleEnglishCheckboxChange,
    handleDarkCheckboxChange,
  };

  return (
    <Router>
      <MyContext.Provider value={sharedData}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MyContext.Provider>
    </Router>
  );
}

export default App;
