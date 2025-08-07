import React from 'react';
import './InformationPopup.css';


const InformationPopup = ({ title, text, containerId, blackoutId, bottomImg, bottomImgSize }) => {  
    const handleClick = () => {
        document.getElementById(containerId).style.visibility = 'hidden';

        if (blackoutId != null) {
            document.getElementById(blackoutId).style.visibility = 'hidden';
        }
    }
  
    return (
    <div className='popup-container'>
        <div className='popup-header'>
            <div className='popup-header-title-container'>
                <p className='popup-title'>
                   {title}
                </p>
            </div>

            <div className='popup-header-button-container'
                 onClick={handleClick}>
                <p className='popup-header-button'>✕</p>
            </div>
        </div>

        <div className='popup-text-container'>
            <p className='popup-text'>{text}</p>
        </div>

        <div className='popup-image-container'>
            <img src={bottomImg} alt='' style={{width: bottomImgSize}}></img>
        </div>
    </div>
  );
};

export default InformationPopup;