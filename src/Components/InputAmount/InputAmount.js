
import './InputAmount.css';
import infoIcon from '../../Assets/Images/Info.png';
import { useNavigate } from 'react-router-dom';

const InputAmount = ({ TypeOfInput, amount, setAmount, size, setSize }) => {

  const navigate = useNavigate();
  const handlePontosDeLuz = () => {
    navigate('/pontos-de-luz');
  }

  return (
    
    <div id="divPrincipalInputAmount">

        <div id="divDescricao">
          <h3 className='divPrincipalTitulo'>{TypeOfInput}</h3>
          <span onClick={handlePontosDeLuz} style={{visibility: TypeOfInput == "Nº de pontos de luz" ? 'visible' : 'hidden', color: '#AA9F8D' }}><b>ⓘ</b></span>

        </div>
        <div id="divInput">
          <h3 className="sinais" onClick={() => setAmount(Math.max(0, amount - 1))}>-</h3>
          <h3>{amount}</h3>
          <h3 className="sinais" onClick={() => setAmount(amount + 1)}>+</h3>
        </div>

    </div>
  );
};

export default InputAmount;