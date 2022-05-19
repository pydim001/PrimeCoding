import './ViewCourse.css';
import { Link } from 'react-router-dom';

function ViewCourse() {
    return (
        <div>
            <Link to="/courses" className='lang-link'>View Course</Link>
        </div>
    )
}

export default ViewCourse;