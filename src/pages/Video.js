import { useState } from 'react';
import './Video.css';

function Video() {

    const [videos, setVideos] = useState(null);

    const fetching = async (path) => {
        try {
            const fetched = await fetch('http://127.0.0.1:8000/' + path)
            const response = await fetched.json();
            setVideos(response);
        } catch (err) {
            setVideos("An Error Occurred");
        }
    }

    fetching('videos/');

    return (
        <div>
            <h1>{videos}</h1>
        </div>
    )
}

export default Video;