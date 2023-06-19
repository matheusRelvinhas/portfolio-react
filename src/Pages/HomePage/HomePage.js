import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import Container from '../../Components/Container/Container';
import { Carousel } from 'antd';
import About from '../../Components/About/About';
import Projects from '../../Components/Projects/Projects';
import Certificates from '../../Components/Certificates/Certificates';

const HomePage = () => {
  
  const { carouselRef, dataCss} = useContext(MyContext);

  return (
    <>
      <Container
        main={
          <div style={{backgroundColor: dataCss.carousel}}>
            <Carousel ref={carouselRef} dotPosition={'top'}>
              <div>
                <About/>
              </div>
              <div>
                <Projects/>
              </div>
              <div>
                <Certificates/>
              </div>
            </Carousel>
          </div>
        }
      /> 
    </>
  );
}

export default HomePage;
