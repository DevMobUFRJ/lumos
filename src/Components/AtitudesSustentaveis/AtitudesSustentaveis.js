import './AtitudesSustentaveis.css';
import { useNavigate } from "react-router-dom";
import leftArrowImage from "../../Assets/Images/leftArrow.svg";
import shareImage from "../../Assets/Images/share.svg";

const AtitudesSustentaveis = () => {
    const navigate = useNavigate();
    const handleClose = () => {
        navigate('/home');
    };

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
                    A partir de demandas da sociedade identificadas pelos resultados das pesquisas realizadas no <b> LabCA ⓘ - Laboratório de Análise e Criação de Ambiências </b> da Escola de Belas Artes - EBA/UFRJ - com o qual o projeto Atitudes Sustentáveis tem vínculo, dentro da interação dialógica entre ensino pesquisa e extensão, algumas dessas ações se voltam para as novas tecnologias de lâmpadas de alto rendimento luminoso, usadas no espaço interno residencial em substituição às lâmpadas incandescentes.
                </p>

                <p className="atitudes-text">
                    O aplicativo Lumos é uma iniciativa do projeto Atitudes Sustentáveis viabilizada pelo projeto de extensão <b> PROMOVE ⓘ</b> do Instituto de Computação (IC) da UFRJ. Essa parceria entre esses dois projetos de extensão da mesma Instituição Federal de Ensino Superior está alinhada com o ODS - Objetivo de Desenvolvimento Sustentável - 12 (selo ODS 12) que consiste em assegurar padrões de produção e de consumo sustentáveis, presente na Agenda 2030 da Organização das Nações Unidas, com a qual o Brasil está comprometido, e atende a política da Universidade de promover sustentabilidade através da educação.
                </p>
            </div>
        </div>
    );
};

export default AtitudesSustentaveis;