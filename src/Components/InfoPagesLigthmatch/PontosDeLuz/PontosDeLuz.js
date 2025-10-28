import React from "react";
import '../PontosDeLuz/PontosDeLuz.css';
import InformationPopup from '../../InformationPopup/InformationPopup';
import { useNavigate } from "react-router-dom";

const PontosDeLuz = () => {

    const luminariasText = (
    <>
        Caso você utilize <strong>luminárias direcionais</strong> (spots de sobrepor ou de embutir) para a luz geral, Lumos recomenda a troca por luminárias difusas ou indiretas (caso seu teto seja claro). 
        Isso vai ajudar a luz ser distribuída uniformemente e seu cômodo vai ter uma iluminação geral mais eficiente em termos de conforto lumínico. 
        As luminárias que permitem maior difusão do fluxo luminoso são aquelas com globo todo de vidro, podendo ser de sobrepor ou pendente, ou com vidro difusor no caso de luminária de embutir (teto com forro). 
        As <strong>luminárias indiretas</strong> mais eficientes são aqueles pendentes que a luz é direcionada para cima, na direção do teto.
        Quando o teto é claro, a luz que incide nele é refletida para o ambiente de forma difusa.
    </>
    );
    const luminariasTitle = "Luminárias";

    const openPopupLuminarias = () => {
        document.getElementById('popup-luminarias').style.visibility = 'visible';
        document.getElementById('popup-blackout').style.visibility = 'visible';
    }

    const sancasText = (
    <>
        <strong>Sancas centrais:</strong> muito usadas para fornecer a luz geral de um ambiente e esse pode ser o seu caso! 
        Elas conduzem a luz para o teto claro e a luz que incide nele é refletida para o ambiente de forma difusa, assim como as luminárias indiretas.  
        Se você tem certeza de que sua sanca não produz somente uma luz de efeito e é ela a responsável pela luz geral do seu cômodo, com medidas corretas para a luz que sai dela iluminar uniformemente o ambiente, você pode utilizar o Lumos!
        <br />
        <br />
        <strong>Sancas com lâmpadas lineares (fluorescente ou leds):</strong> preencha o light macth com 1 ponto de luz e a quantidade de lâmpadas que fica na sua sanca. 
        O Lumos vai informar as unidades fotométricas que cada lâmpada deve ter.
        <br />
        <br />
        <strong>Sancas com fita de leds:</strong> preencha o light macth com 1 ponto de luz e 1 lâmpada. O Lumos vai informar o fluxo luminoso total que deve sair da sanca. 
        Divida esse valor pelo perímetro da sanca e você vai encontra a quantidade de Lúmens (Lm) por metro linear (ml) que sua sanca deve ter. 
        Fitas de Led são especificadas pela informação Lm/ml.
    </>)
    ;
    const sancasTitle = "Sancas";

    const openPopupSancas = () => {
        document.getElementById('popup-sancas').style.visibility = 'visible';
        document.getElementById('popup-blackout').style.visibility = 'visible';
    }

    const niText = (
        <>
            Por vezes, a iluminação de um ambiente se dá por vários pontos direcionais que destacam superfícies, é o que chamamos de luz de destaque. 
            Isso é muito comum em ambientes residenciais, onde as atividades não são, em grande parte, de muita precisão. 
            Nesse caso, Lumos não é para você! Não se preocupe, esse tipo de iluminação, normalmente é realizada com um projeto de luminotécnica e o profissional que você contratou saberá orientar você na escolha correta de seus equipamentos. 
            Contrate sempre um especialista em Light Design (Designer de Interior, Arquiteto, Engenheiro).
        </>
    );
    const niTitle = "Não consegui identificar os pontos de luz geral";

    const openPopupNaoId = () => {
        document.getElementById('popup-nao-id').style.visibility = 'visible';
        document.getElementById('popup-blackout').style.visibility = 'visible';
    }

    const navigate = useNavigate();
    const handleClose = () => {
        navigate(-1);
    };

    return (
        <div className="pontos-de-luz">
            <div className="pdl-title-container">
                <div className="pdl-title">
                    <p className="pdl-title-text">
                       Pontos de Luz
                    </p>
                </div>

                <div
                    onClick={handleClose} 
                    className="pdl-button">
                    <p>✕</p>
                </div>
            </div>

            <div className="pdl-text-container">
                <p className="pdl-text">
                    Os pontos de luz do cômodo que você deve informar são os pontos da luz geral e Lumos vai ajudar você a identificar esses pontos!
                </p>

                <p className="pdl-text">
                    Os pontos de luz geral normalmente estão localizados no teto (laje ou forro). 
                    Só no caso de não haver nenhum ponto no teto, observe se há pontos na parede (arandelas) e, somente neste caso, considere esses pontos. 
                    Em ambas as situações, os pontos da luz geral são aqueles que ficam distribuídos uniformemente. Isso porque a intenção é espalhar a luz por igual no ambiente. 
                </p>

                <p className="pdl-text">
                    A luz geral pode ser ofertada por um ou mais de um conjunto de equipamentos (lâmpada e luminária), sempre distribuídos uniformemente, por isso, quando é ofertada só por um conjunto de equipamento, esse fica localizado no centro do ambiente. 
                    Pode ser que seu cômodo tenha luz geral e luz de destaque no teto e você precise identificar qual é a luz geral. 
                    Nesse caso, veja qual a luz que não está direcionada para algum móvel ou objeto de decoração, pois luz geral não é vinculada a disposição dos mobiliários no cômodo (layout), visto que ela é uma luz para o ambiente.
                </p>

                <p className="pdl-text">
                    Agora que você já sabe reconhecer a luz geral, volte no Light Match e informe o nº de pontos de luz do seu cômodo, mas antes veja essas recomendações que colocamos aqui para você sobre <span onClick={openPopupLuminarias}><b> luminárias ⓘ</b></span>, <span onClick={openPopupSancas}><b> sancas de gesso ⓘ</b></span>, e <span onClick={openPopupNaoId}><b> quando você não conseguiu identificar seus pontos de luz geral ⓘ</b></span>.
                </p>
            </div>

            <div className='popup' id='popup-luminarias'>
                <InformationPopup 
                    title={luminariasTitle}
                    text={luminariasText}
                    containerId="popup-luminarias"
                    blackoutId="popup-blackout"
                />
            </div>

            <div className='popup' id='popup-sancas'>
                <InformationPopup 
                    title={sancasTitle}
                    text={sancasText}
                    containerId="popup-sancas"
                    blackoutId="popup-blackout"
                />
            </div>

            <div className='popup' id='popup-nao-id'>
                <InformationPopup 
                    title={niTitle}
                    text={niText}
                    containerId="popup-nao-id"
                    blackoutId="popup-blackout"
                />
            </div>

            <div id='popup-blackout'></div>
        </div>
    );
};

export default PontosDeLuz;