import './Java.css';
import { useState } from 'react';
import { getFetch } from '../fetch';

function Java() {

    const [data, setData] = useState();
    getFetch("courses/java/").then(res => { setData(res) });

    return (
        <div>
            <h1>{data}</h1>
        </div>
    )
}

export default Java;