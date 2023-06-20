import React, { useState, useRef } from 'react';
import MyContext from './Context/MyContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';

function BodyComponent({ backgroundColor }) {
  document.body.style.backgroundColor = backgroundColor;
  return null; // Como este componente não possui conteúdo a ser renderizado, retornamos null
}

function App() {

  const carouselRef = useRef(null);

  const [englishMode, setEnglishMode] = useState(false);

  const [darkMode, setDarkMode] = useState(false);
  
  const initialStateDataLanguage = {
    about: {
      title:'Sobre',
      text:'Programador Front-End | CSS | HTML | React.js'
    },
    projects: 'Projetos',
    certificates: 'Certificados'
  };
  
  const [dataLanguage, setDataLanguage] = useState(initialStateDataLanguage);
  
  const dataPages = {
    about: {
      image : 'https://i.postimg.cc/9XgLMTdF/image-about-portifolio.png',
      alt : 'image-portifolio'
    },
    projects: [
      {
        title: 'Aluraflix',
        image: 'https://i.postimg.cc/k5CcZymw/tela-app-aluraflix.png',
        alt: 'image-aluraflix',
        url: 'https://matheusrelvinhas.github.io/aluraflix/'
      },
      {
        title: 'Relvis Delivery',
        image: 'https://i.postimg.cc/G27x4wsS/tela-app-relvis-delivery.png',
        alt: 'image-relvis-delivery',
        url: 'https://matheusrelvinhas.github.io/relvis-delivery'
      }
    ],
    certificates: [
      {
        title: 'Alura - React.js',
        image: 'https://i.postimg.cc/J0Fx2VrB/certificado-frontend-alura-en.png',
        alt: 'image-alura-react',
        url: 'https://i.postimg.cc/J0Fx2VrB/certificado-frontend-alura-en.png'
      },
      {
        title: 'Alura - Soft Skills',
        image: 'https://i.postimg.cc/fLBBYS1C/desenvolvimento-pessoal-alura.png',
        alt: 'image-alura-soft-skills',
        url: 'https://i.postimg.cc/fLBBYS1C/desenvolvimento-pessoal-alura.png'
      },
      {
        title: 'Alura - JS',
        image: 'https://i.postimg.cc/KjjQfv22/iniciante-programacao-alura.png',
        alt: 'image-alura-javascript',
        url: 'https://i.postimg.cc/KjjQfv22/iniciante-programacao-alura.png'
      },
      {
        title: 'Curso em Vídeo - JS',
        image: 'https://i.postimg.cc/CLZmf17C/Matheus-Carvalho-Relvinhas-Javascript-40-Horas-Certificado-Curso-em-Video.png',
        alt: 'image-curso-video-javascript',
        url: 'https://i.postimg.cc/CLZmf17C/Matheus-Carvalho-Relvinhas-Javascript-40-Horas-Certificado-Curso-em-Video.png'
      },
      {
        title: 'Trybe - JS',
        image: 'https://i.postimg.cc/SxCdDvwJ/modulo-1-trybe.png',
        alt: 'image-trybe-modulo-1',
        url: 'https://i.postimg.cc/SxCdDvwJ/modulo-1-trybe.png'
      },
      {
        title: 'Trybe - React.js',
        image: 'https://i.postimg.cc/65DzVXbk/modulo-2-trybe.png',
        alt: 'image-trybe-modulo-2',
        url: 'https://i.postimg.cc/65DzVXbk/modulo-2-trybe.png'
      }
    ]
  }

  const initialStateDataCss = {
    background: '#f0f0f0',
    color: '#101010',
    carousel: '#bfbfbf',
    boxShadowHeader: 'inset 0 -10px 10px -10px rgba(0, 0, 0, 0.3)',
    boxShadowFooter: 'inset 0 10px 10px -10px rgba(0, 0, 0, 0.3)',
    dataIcon:[
        {
          icon: 'https://i.postimg.cc/XYCHtJyN/github-icon-dark.png',
          url: 'https://github.com/matheusRelvinhas/',
          alt: 'github',
        },
        {
          icon: 'https://i.postimg.cc/bv06NBTK/linkedin-icon-dark.png',
          url: 'https://www.linkedin.com/in/relvinhasmatheus/',
          alt: 'linkedin',
        },
        {
          icon: 'https://i.postimg.cc/pdBZtnVv/whatsapp-icon-dark.png',
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
        about: {
          title:'About',
          text:'DEV Front-End | CSS | HTML | React.js'
        },
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
            icon: 'https://i.postimg.cc/tgGSbjh3/github-icon-white.png',
            url: 'https://github.com/matheusRelvinhas/',
            alt: 'github',
          },
          {
            icon: 'https://i.postimg.cc/mDbmcyph/linkedin-icon-white.png',
            url: 'https://www.linkedin.com/in/relvinhasmatheus/',
            alt: 'linkedin',
          },
          {
            icon: 'https://i.postimg.cc/xCTPjTqz/whatsapp-icon-white.png',
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
    dataPages,
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
        <BodyComponent backgroundColor={dataCss.carousel} />
        <Routes>
          <Route path="/portfolio-react" element={<HomePage />} />
        </Routes>
      </MyContext.Provider>
    </Router>
  );
}

export default App;
