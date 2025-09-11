import React from "react";
import '../QtdSuperficiesEscuras/QtdSuperficiesEscuras.css';
import { useNavigate } from "react-router-dom";

const QtdSuperficiesEscuras = () => {
    const navigate = useNavigate();
    const handleClose = () => {
        navigate(-1);
    };

    return (
        <div className="qtd-superficies-escuras">
            <div className="qse-title-container">
                <div className="qse-title">
                    <p className="qse-title-text">
                       Quantidade de superfícies escuras
                    </p>
                </div>

                <div
                    onClick={handleClose} 
                    className="qse-button">
                    <p>✕</p>
                </div>
            </div>

            <div className="qse-text-container">
                <p className="qse-text">
                    Para saber a quantidade de superfícies escuras, você deve considerar o número de paredes, o piso e o teto.
                </p>
            </div>
        </div>
    );
};

export default QtdSuperficiesEscuras;