import './Java.css';
import { useState } from 'react';
import { fetching } from '../fetch';

function Java() {

    const [data, setData] = useState();
    fetching("courses/java/").then(res => { setData(res) });

    return (
        <div>
            <h1>{data}</h1>
        </div>
    )
}

export default Java;