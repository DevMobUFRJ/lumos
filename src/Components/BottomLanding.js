import React from 'react';
import lampVector from '../Assets/Images/LampVector.png';
import bottomMainLogos from '../Assets/Images/Frame470.svg';
import instagram from '../Assets/Images/instagram-logo.svg';
import youtube from '../Assets/Images/youtube-logo.svg';
import tiktok from '../Assets/Images/tiktok-logo.svg';
import green from '../Assets/Images/green-logo.svg';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';

const BottomLanding = ({
    marginTop
}) => {
  return (
    <div className='bottom-landing-container'
         style={{marginTop: marginTop}}>

        <div className='card-container'
          style={{
            backgroundImage: `url(${lampVector})`,
            backgroundSize: '43%',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat',
            borderRadius: '1.4rem',
            overflow: 'hidden',
            width: '100%',
        }}>
            <div className='card'>
                <p className='card-text' style={{fontSize: '5.7vw'}}>Acompanhe nossas redes sociais!</p>
                <div id='lamp-card-buttons-container'>
                    <div className='card-button-image-container'>
                      <Link to="https://www.instagram.com/labca.ufrj/" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt='Instagram'></img>
                      </Link>
                    </div>
                
                    <div className='card-button-image-container'>
                      <Link to="https://www.youtube.com/LabCA-UFRJ" target="_blank" rel="noopener noreferrer">
                        <img src={youtube} alt='YouTube'></img>
                      </Link>
                    </div>

                    <div className='card-button-image-container'>
                      <Link to="https://www.tiktok.com/@extensao_labca" target="_blank" rel="noopener noreferrer">
                        <img src={tiktok} alt='TikTok'></img>
                      </Link>
                    </div>

                    <div className='card-button-image-container'>
                    <Link to="https://www.linktr.ee/labca" target="_blank" rel="noopener noreferrer">
                      <img src={green} alt='LinkTree'></img>
                    </Link>
                    </div>
                </div>
            </div>
          </div>
          <div id='bottom_logos'>
            <img src={bottomMainLogos}
                style={{ width: '100%'}}
                alt='Logos'/>
          </div>
    </div>

  );
};

export default BottomLanding;