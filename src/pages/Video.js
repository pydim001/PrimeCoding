import './Video.css';

function Video() {

    const getVideos = async () => {
        const videos = await fetch('http://127.0.0.1:8000/videos/');
        const response = await videos.json();
        return response;
    }

    return (
        <div>
            <h1>{getVideos()}</h1>
        </div>
    )
}

export default Video;