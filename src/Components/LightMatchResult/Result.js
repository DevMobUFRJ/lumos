import './Result.css';
import plus from '../../Assets/Images/plus.png';
import { Link } from 'react-router-dom';
import imgLamp1 from '../../Assets/Images/imgLamp1.png';
import imgLamp2 from '../../Assets/Images/imgLamp2.png';

const Result = ({angle, irc, lumen, temperature, room}) => {
    const texts = [
        {
            index: "1",
            text: "Lumos recomenda que você procure fontes de luz (lâmpadas/painéis) com essas unidades fotométricas que listamos aqui para que a luz geral do seu cômodo lhe oferte conforto lumínico!"
        }, 
        {
            index: "2",
            text: "Atualmente, todas as fontes de luz comercializadas no Brasil economizam energia, porém, se você encontrar mais de um produto com as especificações que colocamos aqui, escolha aquele com valor de potência (watts) mais baixo e garanta maior eficiência energética da sua iluminação: bom para seu bolso e para o nosso meio ambiente!"
        },
        {
            index: "3",
            text: "Lumos recomenda essas duas opções de temperatura de cor para esse ambiente da sua casa, porém você pode escolher a aparência da luz que mais lhe agrada entre amarela (<3000k), neutra (<4000k) e branca (>6500k)."
        },
        {
            index: "4",
            text: "Os valores fornecidos seguem as normas da ABNT que considera visão regular com variação de faixa etária. Os cálculos realizados pelo Lumos não consideram variação em termos de deficiência visual."
        }
    ];

    const getRoomName = (room) => {
        if(room == 'Room') return 'sala';
        else if(room == 'Bedroom') return 'quarto';
        else if(room == 'Kitchen') return 'cozinha/lavanderia';
        else return 'banheiro'
    };

    return (
        <div className='result-screen'>
            <div className='result-screen-header'>
                <div className='result-screen-title'>
                    <h3>Resultado obtido para cômodo {getRoomName(room)}!</h3>
                    {texts[0].text}
                </div>
                <div className='result-screen-close'>
                    <button>
                        <Link to="/sala">
                            <img
                            src={plus}
                            alt="Fechar"
                            className='result-screen-close-rotated'
                            />
                        </Link>
                    </button>
                </div>
            </div>
            <div className='result-screen-text'>
                {texts[1].text}
            </div>
            <div className='result-screen-grid'>
                <div className='result-screen-card'>
                    <p className='result-screen-angle'>Ângulo de Abertura do Facho de Luz</p>
                    <p className='result-screen-angle-text'>{angle}</p>
                </div>
                <div className='resul-screen-cards-asset'>
                  <div className='result-screen-card'>
                    <p className='result-screen-irc'>IRC</p>
                    <p className='result-screen-irc-text'>{irc}</p>
                  </div>
                  <div className='result-screen-card'>
                    <p className='result-screen-lumen'>Lúmen</p>
                    <p className='result-screen-lumen-text'>{lumen}</p>
                  </div>
                </div>
                <div className='result-screen-card'>
                    <p className='result-screen-temperature'>Temperatura de Cor</p>
                    <img src={temperature === '2700K a 4000K' ? imgLamp1 : imgLamp2}/>
                </div>
            </div>
            <div className='result-screen-text'>
                {texts[2].text}
            </div>
            <p className='result-screen-obs'>Observação</p>
            <div className='result-screen-text'>
                {texts[3].text}
            </div>
        </div>
    );
};

export default Result;