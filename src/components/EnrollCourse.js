import "./EnrollCourse.css";
import { Link } from "react-router-dom";

function EnrollCourse() {

    return (
        <div>
            <Link to="/register" className="enroll">Enroll</Link>
        </div>
    )
}

export default EnrollCourse;