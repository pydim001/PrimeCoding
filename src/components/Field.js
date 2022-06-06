import "./Field.css";

function Field(props) {
    return (
        <div className="field-css">
            <h3 className="labels" style={props.nameStyle}>{props.name}:</h3>
            <input type={props.type} className="inputs" style={{ ...props.inputStyle, width: props.width }} />
        </div>
    )
}

export default Field;