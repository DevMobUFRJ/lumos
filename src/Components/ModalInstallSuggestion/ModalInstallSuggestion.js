import React, { useEffect, useState } from "react";
import mainPageHeader from '../../Assets/Images/mainPageHeader.svg';
import bgVector from '../../Assets/Images/bgVector.png';
import './ModalInstallSuggestion.css';

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
    useEffect(() => {
        if(isIOS()) {
            setIsIos(true);
        } else if(isAndroid()){
            setAndroid(true);
        }
    }, []);

    if(getIos) return (
        <div className="overlay">
            <img src={bgVector} alt="Fundo decorativo" className="bg-vector" />
            <div className="modal">
                <div className="icon">
                <img id="main-page-header-image" alt='Lumos' src={mainPageHeader} />
                </div>
                <h2 className="title">Baixe Nosso Aplicatvo</h2>
                <p className="message">
                    INSTRUÇÕES DE DOWNLOAD IOS
                </p>
            </div>
        </div>
    );

    else if(getAndroid) return (
        <div className="overlay">
            <img src={bgVector} alt="Fundo decorativo" className="bg-vector" />
            <div className="modal">
                <div className="icon">
                    <img id="main-page-header-image" alt='Lumos' src={mainPageHeader} />
                </div>
                <h2 className="title">Baixe Nosso Aplicativo</h2>
                <p className="message">
                    INSTRUÇÕES DE DOWNLOAD ANDROID
                </p>
            </div>
        </div>
    );
};