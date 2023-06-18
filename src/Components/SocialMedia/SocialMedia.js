import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import { v4 as uuidv4 } from 'uuid';
import './SocialMedia.css';

const SocialMedia = () => {

  const { dataCss } = useContext(MyContext);

  return (
    <div className='social-media'>
      {dataCss.dataIcon.map(icon => <div key={uuidv4()}>
        <a href={icon.url}>
          <img className='social-media-img' src={icon.icon} alt={icon.alt} width='32' height='32'/>
        </a>
      </div>)}
    </div>
  );
};

export default SocialMedia;
