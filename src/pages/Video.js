import './Video.css';
import { getFetch } from '../fetch';
import { useState } from 'react';

function Video() {

    const [data, setData] = useState();
    getFetch("videos/").then(res => { setData(res) });

    return (
        <div>
            <h1>{data}</h1>
        </div>
    )
}

export default Video;