import { useState } from 'react';
import './Video.css';

function Video() {

    const [videos, setVideos] = useState(null);

    const fetching = async () => {
        try {
            const fetched = await fetch('http://127.0.0.1:8000/videos/');
            const response = await fetched.json();
            setVideos(response);
            console.log(videos, 1);
        } catch (err) {
            setVideos("An Error Occurred");
        }
    }

    fetching();

    return (
        <div>
            <h1>hi</h1>
        </div>
    )
}

export default Video;