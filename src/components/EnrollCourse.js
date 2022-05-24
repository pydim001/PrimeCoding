import "./EnrollCourse.css";
import { Link } from "react-router-dom";

function EnrollCourse(props) {

    return (
        <div>
            <Link to="/register" className="enroll" style={props.style}>Enroll</Link>
        </div>
    )
}

export default EnrollCourse;