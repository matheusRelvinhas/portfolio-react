import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";
import './SwitchLanguage.css';

const SwitchLanguage = () => {
  
  const { englishMode, handleEnglishCheckboxChange } = useContext(MyContext);

  return (
    <div className="checkbox-wrapper-8">
      <input 
        type="checkbox" 
        id="cb3-8" 
        className="tgl tgl-skewed"
        checked={englishMode}
        onChange={handleEnglishCheckboxChange}
      />
      <label for="cb3-8" data-tg-on="EN" data-tg-off="BR" className="tgl-btn"></label>
    </div>  
  );
}

export default SwitchLanguage;
