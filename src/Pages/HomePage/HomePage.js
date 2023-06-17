import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import Container from '../../Components/Container/Container';
import { Carousel } from 'antd';

const HomePage = () => {
  
  const { dataCss } = useContext(MyContext);

  const contentStyle = {
    minHeight: '80vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: dataCss.color,
  };

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
