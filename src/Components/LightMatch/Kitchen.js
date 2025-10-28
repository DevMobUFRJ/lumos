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
import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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

    const camposParaValidar = {
      "Número de pontos de luz": info.NumberOfPointLight,
      "Largura": document.getElementById("inputWidth").value,
      "Comprimento": document.getElementById("inputLength").value,
      "Quantidade de lâmpadas por ponto": info.AmountOfLampsPerPoint,
      //"Quantidade de superfícies escuras": info.AmountOfDarkSurface,
      "Faixa etária dos residentes": info.DescriptionAge,
    };

    const campoInvalido = Object.entries(camposParaValidar).find(([nome, valor]) => {
        
        if (typeof valor === 'string' && valor.trim() === "") {
            return true;
        }
        if (typeof valor === 'number' && (valor === 0 || isNaN(valor))) {
              return true; 
        }
        if (valor === null || valor === undefined) {
            return true;
        }
        return false;
    });

    if (campoInvalido) {
        const nomeDoCampo = campoInvalido[0];
        toast.warn(
          <div>
          <div>Por favor, preencha o campo:</div>
          <strong>{nomeDoCampo}</strong>
        </div>
        );
    } else {
        navigate('/calcular', { state: { info } });
    }
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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}/>        
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