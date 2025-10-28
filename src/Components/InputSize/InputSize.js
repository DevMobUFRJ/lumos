import './InputSize.css';

const InputSize = ({ }) => {
  return (
    
    <div id="divPrincipalInputSize">

        <div id="divDescricao">
          <h3 className='divPrincipalTitulo'>Dimensões (m²)</h3>
        </div>
        <div className='div-input-size-container'>
          <div className="divInputSize">
            <input class='inputSize' id='inputWidth' type="number" placeholder='Largura'></input>
          </div>
          <div className="divInputSize">
            <input class='inputSize' id='inputLength' type="number" placeholder='Comprimento' ></input>
          </div>
        </div>

    </div>
  );
};

export default InputSize;