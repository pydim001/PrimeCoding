import './Python.css';
import { useState } from 'react';
import { getFetch } from '../fetch';

function Python() {

    const [data, setData] = useState();
    getFetch("courses/python/").then(res => { setData(res) });

    return (
        <div>
            {data}
        </div>
    )
}

export default Python;