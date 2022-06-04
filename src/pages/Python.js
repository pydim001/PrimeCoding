import './Python.css';
import { useState } from 'react';
import { fetching } from '../fetch';

function Python() {

    const [data, setData] = useState();
    fetching("courses/python/").then(res => { setData(res) });

    return (
        <div>
            {data}
        </div>
    )
}

export default Python;