import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import CardComponent from './Components/CardComponent/CardComponent';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from './Assets/Images/lampada_cortada.png';
import img2 from './Assets/Images/JEMA_GER_1639-09-removebg-preview 1.png';
import img3 from './Assets/Images/removal 4.png';
import arrow from './Assets/Images/Vector.svg';
import './App.css';
import HomePage from './Components/Home';
import LuzGeral from './Components/LuzGeral';
import AtitudesSustentaveis from './Components/AtitudesSustentaveis/AtitudesSustentaveis'
import Faq from './Components/Faq';
import Kitchen from './Components/LightMatch/Kitchen';
import Room from './Components/LightMatch/Room';
import Bedroom from './Components/LightMatch/Bedroom';
import Bathroom from './Components/LightMatch/Bathroom';
import Glossary from './Components/Glossary/Glossary';
import Result from './Components/LightMatchResult/Result';
import CalcResult from './Components/CalcResultLightMatch/CalcResult';
import { useLocation } from 'react-router-dom';
import MobileOnlyModal from './Components/ModalMobileOnly/ModalMobileOnly';
import PontosDeLuz from './Components/InfoPagesLigthmatch/PontosDeLuz/PontosDeLuz';
import QtdSuperficiesEscuras from './Components/InfoPagesLigthmatch/QtdSuperficiesEscuras/QtdSuperficiesEscuras';
import ModalInstallSuggestion from './Components/ModalInstallSuggestion/ModalInstallSuggestion';

const cardData = [
  {
    image: img1,
    title: 'Ilumine sua casa corretamente',
    description: 'Descubra as informações necessárias para obter a melhor luz geral em cada cômodo de sua residência',
    color: '#BB6402',
  },
  {
    image: img2,
    title: 'Explore mais sobre o mundo da iluminação',
    description: 'Com o Glossário você é capaz de entender a importância das propriedades lumínicas e as informações nas embalagens dos produtos de iluminação',
    color: '#7C3F0B',
  },
  {
    image: img3,
    title: 'Você sabe o que é Luz geral?',
    description: 'Lumos explica! Descubra como identificar a iluminação geral na sua casa',
    color: '#984D08',
  },
];

const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if(currentIndex == 2){
      navigate('/luz-geral');
    } else {
      const nextIndex = currentIndex === cardData.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='backgroundCards'
      >
        {cardData.map((card, index) => (
          <CardComponent
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            color={card.color}
            onClick={handleNext}
            isActive={index === currentIndex}
          />
        ))}
        <div style={{ 
          position: 'absolute', 
          bottom: '11.5vh', 
          left: '5vw',
          fontSize: '0.9rem',
          fontWeight: '400'}}>Lumos © 2025 All rights reserved</div>
        <div style={{ position: 'absolute', bottom: '10vh', right: '5vw' }}>
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              backgroundColor: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <img src={arrow}/>
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const ResultWrapper = () => {
  const location = useLocation();
  const { angle, irc, lumen, temperature, room } = location.state;

  return (
    <Result angle={angle} irc={irc} lumen={lumen} temperature={temperature} room={room} />
  );
};

const App = () => {

  return (
    <>
    <MobileOnlyModal />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="/glossario" element={<Glossary />} />
            <Route path="/sala" element={<Room/>} />
            <Route path="/cozinha" element={<Kitchen/>} />
            <Route path="/quarto" element={<Bedroom/>} />
            <Route path="/banheiro" element={<Bathroom/>} />
            <Route path="/luz-geral" element={<AnimatePresence mode='wait'>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    <LuzGeral />
                  </motion.div>
                </AnimatePresence>} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/atitudes-sustentaveis" element={<AtitudesSustentaveis />} />
            <Route path="/result" element={<AnimatePresence mode='wait'>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <ResultWrapper />
              </motion.div>
            </AnimatePresence>} />
            <Route path="/calcular" element={<CalcResult />} />
            <Route path="/pontos-de-luz" element={<AnimatePresence mode='wait'>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    <PontosDeLuz />
                  </motion.div>
                </AnimatePresence>} />
            <Route path="/qtd-superficies-escuras" element={<AnimatePresence mode='wait'>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    <QtdSuperficiesEscuras />
                  </motion.div>
                </AnimatePresence>} />
          </Routes>
        </Router>
    </>
  );
};


export default App;
