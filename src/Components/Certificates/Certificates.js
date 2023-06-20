import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";
import { Card } from "antd";
import "./Certificates.css";

const Certificates = () => {
  const { dataCss, dataLanguage, dataPages } = useContext(MyContext);

  return (
    <div
      className='certificates-div'
      style={{
        backgroundColor: dataCss.carousel,
      }}
    >
      <h1
        className='certificates-h1'
        style={{
          color: dataCss.color,
        }}
      >
        {dataLanguage.certificates}
      </h1>
      <div className='certificates-cards-div'>
        {dataPages.certificates.map((card) => (
          <div className='card'>
            <a href={card.url}>
            <Card
              hoverable
              style={{
                width: "280px",
                borderColor: dataCss.background,
                backgroundColor: dataCss.background,
              }}
              cover={<img className='certificates-img' alt={card.alt} src={card.image} />}
            >
              <h2
                className='certificates-h2'
                style={{
                  color: dataCss.color,
                }}
              >
                {card.title}
              </h2>
            </Card>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
