import "./Counter.css";

function Counter(props) {
    if (props.courses > 0) {
        return (
            <div id="counter">
                <div id="count"><p>{props.courses}</p></div>
            </div>
        )
    }
}

export default Counter;