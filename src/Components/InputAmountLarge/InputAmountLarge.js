import './InputAmountLarge.css';
import infoIcon from '../../Assets/Images/Info.png';
import InformationPopup from '../InformationPopup/InformationPopup';
import { useNavigate } from 'react-router-dom';

const InputAmount = ({ HaveInfo, TypeOfInput, amount, setAmount }) => {

  const navigate = useNavigate();

  const devmobTitle = "DevMob";
  const devmobText = "teste";

  const handleQSE = () => {
    //document.getElementById('popup-devmob').style.visibility = 'visible';
    //document.getElementById('popup-blackout').style.visibility = 'visible';
    
    navigate('/qtd-superficies-escuras');
  }

  return (
    
    <div id="divPrincipal">
      <div id="divDescricao">
        <h3>{TypeOfInput}</h3>
        <span onClick={handleQSE} style={{visibility: TypeOfInput == "Quantidade de superfícies escuras" ? 'visible' : 'hidden', color: '#AA9F8D' }}><b>ⓘ</b></span>
      </div>
      <div id="divInputLarge">
        <h3 className="sinais" onClick={() => setAmount(Math.max(0, amount - 1))}>-</h3>
        <h3>{amount}</h3>
        <h3 className="sinais" onClick={() => setAmount(amount + 1)}>+</h3>
      </div>

      <div className='popup' id='popup-devmob'>
        <InformationPopup 
            title={devmobTitle}
            text={devmobText}
            containerId="popup-devmob"
            blackoutId="popup-blackout"
        />
      </div>

      <div id='popup-blackout'></div>
    </div>
  );
};

export default InputAmount;