import './AtitudesSustentaveis.css';
import { useNavigate } from "react-router-dom";
import leftArrowImage from "../../Assets/Images/leftArrow.svg";
import shareImage from "../../Assets/Images/share.svg";
import InformationPopup from '../InformationPopup/InformationPopup';

const AtitudesSustentaveis = () => {
    const labcaTitle = "LabCA - Laboratório de Análise e Criação de Ambiências";
    const labcaText = "Grupo de pesquisa que investiga aspectos sensoriais do espaço voltados para o estímulo da percepção tanto objetiva como subjetiva do usuário que constitui a inter-relação pessoa-ambiente e que colabora na construção do lugar físico, sociológico e fenomenológico, promovendo a identidade espacial. Essas atividades se dão de forma transdisciplinar na geração de conhecimento, trabalhando a promoção do bem estar do ser humano através da ergonomia do mobiliário e dos equipamentos, da relação edifício, cidade e paisagem e da ciência do conforto ambiental, no contexto da sustentabilidade, que envolvem as áreas afins do Design, do Design de Interior, do Paisagismo, da Arquitetura e do Urbanismo. A partir da integração entre ensino, pesquisa e extensão, o LABCA visa à repercussão de seus trabalhos nos meios de divulgação científica, com produção bibliográfica, técnica, artística e cultural que envolva outras Instituições e a Sociedade.";
    const devmobTitle = "DevMob";
    const devmobText = "Grupo de Interesse e Extensão em Desenvolvimento de Aplicativos Móveis do Instituto de Computação (IC) da UFRJ - Universidade Federal do Rio de Janeiro.";
    
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/home');
    };

    const openPopupLabca = () => {
        document.getElementById('popup-labca').style.visibility = 'visible';
        document.getElementById('popup-blackout').style.visibility = 'visible';
    }

    const openPopupDevmob = () => {
        document.getElementById('popup-devmob').style.visibility = 'visible';
        document.getElementById('popup-blackout').style.visibility = 'visible';
    }

    return (
        <div className="atitudes-sustentaveis">
            <div className="atitudes-title-container">
                <div className="atitudes-title-buttons-container">
                    <div
                        onClick={handleClose} 
                        className="atitudes-button">
                        <img src={leftArrowImage} alt='Home'></img>
                    </div>

                    <div className="atitudes-button">
                        <img src={shareImage} alt='Compartilhar'></img>
                    </div>
                </div>

                <div className="atitudes-title">
                    <p className="atitudes-title-text">
                       Atitudes Sustentáveis
                    </p>
                    <p className="atitudes-title-subtext">
                       LabCa (UFRJ)
                    </p>
                </div>
            </div>

            <div className="atitudes-text-container">
                <p className="atitudes-text">
                    O projeto Atitudes Sustentáveis é um projeto de extensão da Universidade Federal do Rio de Janeiro que realiza diversas ações dedicadas à educação e popularização da ciência e da tecnologia com o objetivo de promover a inserção e a difusão no mercado de produtos e processos de inovação tecnológica, estimulando mudanças no padrão tanto de consumo da população, como de produção de bens e serviços ofertados atualmente.
                </p>

                <p className="atitudes-text">
                    A partir de demandas da sociedade identificadas pelos resultados das pesquisas realizadas no <span onClick={openPopupLabca}><b> LabCA ⓘ - Laboratório de Análise e Criação de Ambiências </b></span> da Escola de Belas Artes - EBA/UFRJ - com o qual o projeto Atitudes Sustentáveis tem vínculo, dentro da interação dialógica entre ensino pesquisa e extensão, algumas dessas ações se voltam para as novas tecnologias de lâmpadas de alto rendimento luminoso, usadas no espaço interno residencial em substituição às lâmpadas incandescentes.
                </p>

                <p className="atitudes-text">
                    O aplicativo Lumos é uma iniciativa do projeto Atitudes Sustentáveis viabilizada pelo projeto de extensão <span onClick={openPopupDevmob}><b> PROMOVE ⓘ</b></span> do Instituto de Computação (IC) da UFRJ. Essa parceria entre esses dois projetos de extensão da mesma Instituição Federal de Ensino Superior está alinhada com o ODS - Objetivo de Desenvolvimento Sustentável - 12 (selo ODS 12) que consiste em assegurar padrões de produção e de consumo sustentáveis, presente na Agenda 2030 da Organização das Nações Unidas, com a qual o Brasil está comprometido, e atende a política da Universidade de promover sustentabilidade através da educação.
                </p>
            </div>

            <div className='popup' id='popup-labca'>
                <InformationPopup 
                    title={labcaTitle}
                    text={labcaText}
                    containerId="popup-labca"
                    blackoutId="popup-blackout"
                />
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

export default AtitudesSustentaveis;