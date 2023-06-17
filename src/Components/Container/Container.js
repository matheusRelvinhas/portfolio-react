import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Container.css';

const Container = ({ main }) => {

  const { dataCss } = useContext(MyContext);

  return (
    <div style={{backgroundColor: dataCss.background}} className='container'>
      <div className='container-header'>
        <Header />
      </div>    
      <main className='container-main'>
        {main}
      </main>
      <div style={{backgroundColor: dataCss.background}} className='container-footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Container;
