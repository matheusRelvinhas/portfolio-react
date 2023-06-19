import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import './About.css';


const About = () => {
  
  const { dataPages, dataCss, dataLanguage } = useContext(MyContext);

  return (
    <div className='about-div' style={{
      backgroundColor:dataCss.carousel,
      color:dataCss.color,
    }}>
      <h1 className='about-h1'>{dataLanguage.about.title}</h1>
      <div className='about-text-div'> 
        <p className='about-text'>{dataLanguage.about.text}</p>
        <p>/matheusRelvinhas</p>
      </div>
      <div className='about-div-img'>
        <img className='about-img' src={dataPages.about.image} alt={dataPages.about.alt}/>
      </div>
    </div>
    
  );
}

export default About;
