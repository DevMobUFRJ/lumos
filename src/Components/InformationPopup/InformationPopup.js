import React from 'react';
import './InformationPopup.css';


const InformationPopup = ({ title, text }) => {
  return (
    <div className='container'>
        <div className='header'>
            <div className='header-title-container'>
                <p className='title'>
                   {title}
                </p>
            </div>

            <div className='header-button-container'>
                <p className='header-button'>✕</p>
            </div>
        </div>

        <div className='text-container'>
            <p className='text'>{text}</p>
        </div>
    </div>
  );
};

export default InformationPopup;