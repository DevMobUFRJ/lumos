import React, { useEffect, useState } from "react";
import mainPageHeader from '../../Assets/Images/mainPageHeader.svg';
import bgVector from '../../Assets/Images/bgVector.png';
import './ModalInstallSuggestion.css';
import Share from '../../Assets/Images/download.svg';

const isIOS = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent) && !window.MSStream;

};

const isAndroid = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /android/.test(userAgent) && !window.MSStream;
}

export default function ModalInstallSuggestion(){
    const [getIos, setIsIos] = useState(false);
    const [getAndroid, setAndroid] = useState(false);

    const isInStandaloneMode = () => (
        window.matchMedia('(display-mode: standalone)').matches || 
        (window.navigator.standalone === true) // para iOS
);

    useEffect(() => {
        if(isIOS()) {
            setIsIos(true);
        } else if(isAndroid()){
            setAndroid(true);
        }
    }, []);

    if(getIos && !isInStandaloneMode()) return (
        <div className="overlay">
            <img src={bgVector} alt="Fundo decorativo" className="bg-vector" />
            <div className="modal">
                <div className="icon">
                <img id="main-page-header-image" alt='Lumos' src={mainPageHeader} />
                </div>
                <h2 className="title">Baixe Nosso Aplicatvo</h2>
                <p className="message">
                    Clique em Compartilhar (<img width="25" height="25" src={Share} alt="Ícone de download"/>) e depois em 'Adicionar à Tela de Início'.
                </p>
            </div>
        </div>
    );

    else if(getAndroid && !isInStandaloneMode()) return (
        <div className="overlay">
            <img src={bgVector} alt="Fundo decorativo" className="bg-vector" />
            <div className="modal">
                <div className="icon">
                    <img id="main-page-header-image" alt='Lumos' src={mainPageHeader} />
                </div>
                <h2 className="title">Baixe Nosso Aplicativo</h2>
                <p className="message">
                    Clique no menu de três pontos (ou no ícone de compartilhamento), selecione 'Adicionar à tela inicial' ou 'Instalar', e então clique em 'Instalar' quando o pop-up aparecer para confirmar.
                </p>
            </div>
        </div>
    );
};