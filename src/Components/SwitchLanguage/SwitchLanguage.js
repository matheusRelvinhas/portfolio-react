import React from 'react';
import './SwitchLanguage.css';

const SwitchLanguage = () => {
  return (
    <div className="checkbox-wrapper-8">
      <input type="checkbox" id="cb3-8" className="tgl tgl-skewed"/>
      <label for="cb3-8" data-tg-on="EN" data-tg-off="BR" className="tgl-btn"></label>
    </div>  
  );
}

export default SwitchLanguage;
