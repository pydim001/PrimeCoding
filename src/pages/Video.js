import './Video.css';
import { getFetch } from '../fetch';
import { useState } from 'react';
//import ErrorMessage from '../components/ErrorMessage';

function Video() {
    // eslint-disable-next-line
    const [data, setData] = useState();
    getFetch("videos/").then(res => { setData(res) });

    return (
        <div>

        </div>
    )
}

export default Video;