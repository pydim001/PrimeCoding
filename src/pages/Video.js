import './Video.css';

function Video() {

    const getVideos = () => {
        try {
            const videos = fetch('http://127.0.0.1:8000/videos/')
                .then(response => response.json()).then(jsoned => jsoned);
            console.log(videos, 2);
            return JSON.stringify(videos);
        } catch (err) {
            console.log(err);
            return "An Error has Occurred";
        }
    }

    return (
        <div>
            <h1>{getVideos()}</h1>
        </div>
    )
}

export default Video;