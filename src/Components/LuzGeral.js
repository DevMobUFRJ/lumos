import React from "react";
import './LuzGeral.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handleClose = () => {
        navigate('/home');
    };

    return (
        <div className="luz-geral">
            <div className="lg-title-container">
                <div className="lg-title">
                    <p className="lg-title-text">
                       Um pouco mais sobre luz geral...
                    </p>
                </div>

                <div
                    onClick={handleClose} 
                    className="lg-button">
                    <p>✕</p>
                </div>
            </div>

            <div className="lg-text-container">
                <p className="lg-text">
                    A luz geral de um ambiente é aquela luz que tem como objetivo iluminar uniformemente o cômodo, eliminando o máximo possível sombras que
                    venham a atrapalhar a realização de tarefas, com a quantidade de energia radiante (luz) ideal para o conforto lumínico do usuário.
                </p>

                <p className="lg-text">
                    Essa quantidade ideal é determinada pelo nível de iluminância (lux), que nada mais é do que a relação entre o fluxo luminoso da lâmpada e a metragem quadrada do ambiente (Lm/m²). O nível de iluminância é regulamentado pela <b>ABNT - Associação Brasileira de Normas Técnicas</b> e
                    deve levar em consideração a capacidade visual dos usuários (em termos gerais segue a idade dos usuários) e a refletância das superfícies
                    (capacidade de refletir a luz das paredes piso e teto).
                </p>

                <p className="lg-text">
                    A luz geral não necessariamente deve estar vinculada a disposição dos mobiliários no cômodo (layout), visto que ela é uma luz para o ambiente.
                    Sombras que a luz geral não conseguiu retirar ou sombras criadas pelo posicionamento do usuário, em virtude da distribuição dos moveis, são
                    eliminadas pela luz de destaque. Essa sim tem relação com o layout do ambiente e, normalmente, é direcional, enquanto a luz geral é difusa. Isso
                    deve ajudar a você a identificar a luz geral do seu cômodo.
                </p>

                <p className="lg-text">
                    Lembre! Ela pode ser ofertada por um ou mais de um conjunto de equipamentos (lâmpada e luminária), sempre distribuídos uniformemente, por isso, quando é ofertada só por um conjunto de equipamento, esse fica localizado no centro do ambiente.
                </p>

                <p className="lg-text">
                    O Lumos ajuda você a saber quanto de fluxo luminoso cada lâmpada que você usa para a luz geral de cada cômodo deve ter, considerando a
                    quantidade de pontos de luz do ambiente, assim como a quantidade de lâmpada do conjunto de equipamentos utilizado em cada ponto.
                </p>
            </div>
        </div>
    );
};

export default Home;