import './Video.css';
import { fetching } from '../fetch';

function Video() {

    const data = fetching("videos/");

    return (
        <div>
            <h1>{data}</h1>
        </div>
    )
}

export default Video;