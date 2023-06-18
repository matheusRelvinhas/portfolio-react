import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import Container from '../../Components/Container/Container';
import { Carousel } from 'antd';

const HomePage = () => {
  
  const { dataCss, carouselRef, dataLanguage} = useContext(MyContext);

  const contentStyle = {
    minHeight: '80vh',
    color: '#fff',
    lineHeight: '100px',
    textAlign: 'center',
    background: dataCss.carousel,
  };
  
  return (
    <>
      <Container
        main={
          <>
            <Carousel ref={carouselRef} dotPosition={'top'}>
              <div>
                <h3 style={contentStyle}>{dataLanguage.about}</h3>
              </div>
              <div>
                <h3 style={contentStyle}>{dataLanguage.projects}</h3>
              </div>
              <div>
                <h3 style={contentStyle}>{dataLanguage.certificates}</h3>
              </div>
            </Carousel>
          </>
        }
      /> 
    </>
  );
}

export default HomePage;
