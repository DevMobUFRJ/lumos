import React from 'react';
import './InformationPopup.css';


const InformationPopup = ({ title, text, containerId, blackoutId }) => {  
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
    </div>
  );
};

export default InformationPopup;