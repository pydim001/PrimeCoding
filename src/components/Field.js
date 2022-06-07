import { useState } from "react";
import "./Field.css";

function Field(props) {

    let inputValue = "";

    const changeText = (val) => {
        inputValue = val.target.value;
        props.onChange(inputValue);
    }

    return (
        <div className="field-css">
            <h3 className="labels" style={props.nameStyle}>{props.name}:</h3>
            <input type={props.type} className="inputs" style={{ ...props.inputStyle, width: props.width }} onChange={changeText} />
        </div>
    )
}

export default Field;