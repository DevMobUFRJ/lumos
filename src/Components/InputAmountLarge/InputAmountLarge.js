import './InputAmountLarge.css';
import infoIcon from '../../Assets/Images/Info.png';
import InformationPopup from '../InformationPopup/InformationPopup';
import { useNavigate } from 'react-router-dom';

const InputAmount = ({ HaveInfo, TypeOfInput, amount, setAmount }) => {

  const handleQSE = () => {
    document.getElementById('popup-room').style.visibility = 'visible';
    document.getElementById('popup-blackout').style.visibility = 'visible';
    document.getElementById('navBar').style.display = 'none';
  }

  return (
    
    <div id="divPrincipal">
      <div id="divDescricao">
        <h3>{TypeOfInput}</h3>
        <span onClick={handleQSE} style={{visibility: TypeOfInput == "Quantidade de superfícies escuras" ? 'visible' : 'hidden', color: '#AA9F8D' }}><b>ⓘ</b></span>
      </div>
      <div id="divInputLarge">
        <div className="sinais" onClick={() => setAmount(Math.max(0, amount - 1))}>-</div>
        <h3>{amount}</h3>
        <div className="sinais" onClick={() => setAmount(amount + 1)}>+</div>
      </div>
    </div>
  );
};

export default InputAmount;