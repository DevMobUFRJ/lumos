import ButtonRoom from '../../Components/ButtonsRoom/ButtonsRoom';
import { useState } from 'react';
import InputAmount from '../../Components/InputAmount/InputAmount';
import InputAmountLarge from '../../Components/InputAmountLarge/InputAmountLarge';
import './LightMatch.css';
import ResultsButton from '../../Components/ResultsButton/ResultsButton';
import InputOption from '../../Components/InputOption/InputOption';
import InputSize from '../../Components/InputSize/InputSize';
import NavBar from '../../Components/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';



const Bedroom = () => {
  const navigate = useNavigate();
  
  function getResult() {
   
    const info = {
      NumberOfPointLight: NumberOfPointLight,
      Size: document.getElementById("inputWidth").value * document.getElementById("inputLength").value,
      AmountOfLampsPerPoint: AmountOfLampsPerPoint,
      AmountOfDarkSurface: AmountOfDarkSurface,
      DescriptionAge: document.getElementsByClassName("custom-select")[0].value,
      Ambient: 'Bedroom',
    }

    navigate('/calcular', { state: { info } });
  }

  const InputOptionParameters  = {
    titulo: "Faixa etária dos residentes",
    opcoes: ["Uso preferencial de idosos", "Uso misto", "Uso preferencial de crianças"]
  }

  const [NumberOfPointLight, setNumberOfPointLight] = useState(0);
  const [AmountOfLampsPerPoint, setAmountOfLampsPerPoint] = useState(0);
  const [AmountOfDarkSurface, setAAmountOfDarkSurface] = useState(0);


  return (
    <div className='root-lightmatch'>

      <div className='container-light-match'>
        <div id='divLightMatch'>
            
            <div id='divButtonRoom'>
                <ButtonRoom colorRoom={false} colorKitchen={false} colorBedroom={true} colorBathroom={false} />
            </div>

            <h3 className='infoComodo'>Informações sobre o cômodo</h3>

          <form name="valform" id='formData'>
            <div id="divSizeAndAmount"> 
              <InputAmount TypeOfInput={"Nº de pontos de luz"} amount={NumberOfPointLight} setAmount={setNumberOfPointLight} />
              <InputSize />
            </div>

            <InputAmountLarge amount={AmountOfLampsPerPoint} setAmount={setAmountOfLampsPerPoint} HaveInfo={false} TypeOfInput={"Quantidade de lâmpadas por ponto"}/>

            <InputAmountLarge amount={AmountOfDarkSurface} setAmount={setAAmountOfDarkSurface} HaveInfo={true} TypeOfInput={"Quantidade de superfícies escuras"}/>

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

export default Bedroom;