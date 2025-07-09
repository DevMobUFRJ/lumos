import ButtonRoom from '../ButtonsRoom/ButtonsRoom';
import { useState } from 'react';
import InputAmount from '../InputAmount/InputAmount';
import InputAmountLarge from '../InputAmountLarge/InputAmountLarge';
import './LightMatch.css';
import ResultsButton from '../ResultsButton/ResultsButton';
import InputOption from '../InputOption/InputOption';
import InputSize from '../InputSize/InputSize';
import NavBar from '../NavBar/NavBar';
import { useNavigate } from 'react-router-dom';



const Kitchen = () => {
  const navigate = useNavigate();
  
  function getResult() {
   
    const info = {
      NumberOfPointLight: NumberOfPointLight,
      Size: document.getElementById("inputWidth").value * document.getElementById("inputLength").value,
      AmountOfLampsPerPoint: AmountOfLampsPerPoint,
      DescriptionAge: document.getElementsByClassName("custom-select")[0].value,
      Ambient: 'Kitchen',
    }
  
    navigate('/calcular', { state: { info } });
  }

  const InputOptionParameters  = {
    titulo: "Faixa etária dos residentes",
    opcoes: ["Uso preferencial de idosos", "Uso misto"]
  }

  const [NumberOfPointLight, setNumberOfPointLight] = useState(0);
  const [AmountOfLampsPerPoint, setAmountOfLampsPerPoint] = useState(0);


  return (
    <div className='root-lightmatch'>
      <div className='container-light-match'>        
        <div id='divLightMatch'>
            
            <div id='divButtonRoom'>
                <ButtonRoom colorRoom={false} colorKitchen={true} corBedroom={false} colorBathroom={false} />
            </div>

            <h3 className='infoComodo'>Informações sobre o cômodo</h3>

          <form name="valform" id='formData'>
            <div id="divSizeAndAmount"> 
              <InputAmount TypeOfInput={"Nº de pontos de luz"} amount={NumberOfPointLight} setAmount={setNumberOfPointLight} />

              <InputSize />
            </div>
              <InputAmountLarge amount={AmountOfLampsPerPoint} setAmount={setAmountOfLampsPerPoint} HaveInfo={false} TypeOfInput={"Quantidade de lâmpadas por ponto"}/>
                        
              <InputOption nameOfInput={InputOptionParameters.titulo} optionsArray={InputOptionParameters.opcoes}/>
            <div id='divbotao' onClick={getResult}>
              <ResultsButton />
            </div>
          </form >
        </div>
      </div>

      <NavBar colorFaq={false} colorGlossario={false} colorHome={false} colorLightMatch={true}/>
    </div>
  );
};

export default Kitchen;