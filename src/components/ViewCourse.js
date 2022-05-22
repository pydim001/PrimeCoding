import './ViewCourse.css';
import { Link } from 'react-router-dom';

function ViewCourse(props) {

    if (props.inline === true) {
        return (
            <div>
                <Link to={"/courses" + props.to} className='lang-link' style={{ display: "inline-block", marginTop: -50 }}>View Course</Link>
            </div>
        )
    }
    else {
        return (
            <div>
                <Link to={"/courses" + props.to} className='lang-link'>View Course</Link>
            </div>
        )
    }
}

export default ViewCourse;