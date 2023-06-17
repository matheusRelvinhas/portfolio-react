import React from 'react';
import Container from '../../Components/Container/Container';
import { Carousel, Radio } from 'antd';

const contentStyle = {
  minHeight: '80vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const HomePage = () => {

  return (
    <>
      <Container
        main={
          <>
            <Carousel dotPosition={'top'}>
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </>
        }
      /> 
    </>
  );
}

export default HomePage;
