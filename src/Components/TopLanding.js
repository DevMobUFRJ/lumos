import StaticButton from './Buttons';
import Board from './Board';
import { Link } from 'react-router-dom';
import lampVector from '../Assets/Images/LampVector.png';
import lightMatch from '../Assets/Images/nav-lightmatch.svg';
import glossario from '../Assets/Images/nav-glossario.svg';
import faq from '../Assets/Images/nav-faq.svg';
import './Home.css';

const TopLanding = () => {
  return (
    <div className='top-landing-container'>
        <div className='card-container'
          style={{
            backgroundImage: `url(${lampVector})`,
            backgroundSize: '43%',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat',
            borderRadius: '1.4rem',
            overflow: 'hidden',
            width: '100%'
        }}>
            <div className='card'>
                <p className='card-text'>Conheça o projeto <b id="card-text_top_landing">Atitudes Sustentáveis!</b></p>
                  <Link to="/atitudes-sustentaveis" className='button-container' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <StaticButton 
                      text="Saiba mais →" 
                      fontSize="4vw"
                      buttonWidth="45%" 
                      buttonHeight="90%" 
                      buttonBorderRadius="2rem" 
                      backgroundColor="#FEB800" 
                      buttonBorder="none"
                    />
                  </Link>
            </div>
        </div>

        <div className='board-box'>
          <div id='top-boards'>
            <Link to="/sala" style={{ textDecoration: 'none', width:'100%', color: 'inherit', marginRight: '1rem' }}>
              <Board
                backgroundColor="#FEB800"
                width="100%"
                height="7.5rem"
                borderRadius="1.4rem"
                border="none"
                text="Light Match"
                fontSize="1.5rem"
                padding="1.3rem"
                textDivWidth="4rem"
                imgBorder="1px solid black"
                image={lightMatch}
              />
            </Link>  

            <Link to="/faq" style={{ textDecoration: 'none', width:'100%', color: 'inherit' }}>
              <Board
                backgroundColor="white"
                width="100%"
                height="7.5rem"
                borderRadius="1.4rem"
                border="3px solid #FEB800"
                text="FAQ"
                fontSize="1.5rem"
                padding="1.3rem"
                imgBorder="1px solid #FEB800"
                imgColor="#FEB800"
                image={faq}
              />
            </Link>
          </div>

          <div id='bottom-board'>
            <Link to="/glossario" style={{ textDecoration: 'none', width:'100%', color: 'inherit' }}>
              <Board
                backgroundColor="white"
                width="100%"
                height="7.5rem"
                borderRadius="1.4rem"
                border="3px solid #FEB800"
                text="Glossário"
                fontSize="1.5rem"
                padding="1.3rem"
                imgBorder="1px solid #FEB800"
                imgColor="#FEB800"
                image={glossario}
              />
          </Link>
          </div>
        </div>
    </div>
  );
};

export default TopLanding;