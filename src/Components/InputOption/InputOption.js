/* eslint-disable jsx-a11y/alt-text */
import './InputOption.css';
import setaSelect from '../../Assets/Images/CaretDown.png'
const InputOption = ({nameOfInput, optionsArray}) => {


    return (
        <div className="inputoptions-container">
            <label className="select-label">{nameOfInput}</label>

            <div className="inputoptions-select-container">
                <select name="opcoes" id="custom-select" className="custom-select">

                    {optionsArray.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                
                <img src={setaSelect} id='setaSelect'/>
            </div>
        </div>
    )
}

export default InputOption;