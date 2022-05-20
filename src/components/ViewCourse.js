import './ViewCourse.css';
import { Link } from 'react-router-dom';

function ViewCourse(props) {
    return (
        <div>
            <Link to={"/courses" + props.to} className='lang-link'>View Course</Link>
        </div>
    )
}

export default ViewCourse;