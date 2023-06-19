import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import './Certificates.css';


const Certificates = () => {
  
  const { dataCss, dataLanguage } = useContext(MyContext);

  return (
    <div className='certificates-div' style={{
      backgroundColor:dataCss.carousel,
      color:dataCss.color,
    }}>
      <h1>{dataLanguage.certificates}</h1>
    </div>
    
  );
}

export default Certificates;
