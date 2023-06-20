import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";
import { Card } from "antd";
import "./Projects.css";

const Projects = () => {
  const { dataCss, dataLanguage, dataPages } = useContext(MyContext);

  return (
    <div
      className='projects-div'
      style={{
        backgroundColor: dataCss.carousel,
      }}
    >
      <h1
        className='projects-h1'
        style={{
          color: dataCss.color,
        }}
      >
        {dataLanguage.projects}
      </h1>
      <div className='projects-cards-div'>
        {dataPages.projects.map((card) => (
          <div className='card'>
            <a href={card.url}>
            <Card
              hoverable
              style={{
                width: "280px",
                borderColor: dataCss.background,
                backgroundColor: dataCss.background,
              }}
              cover={<img className='projects-img' alt={card.alt} src={card.image} />}
            >
              <h2
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

export default Projects;
