import './Java.css';
import { fetching } from '../fetch';

function Java() {

    const data = fetching("courses/java/");

    return (
        <div>
            <h1>{data}</h1>
        </div>
    )
}

export default Java;