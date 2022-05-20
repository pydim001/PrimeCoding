import "./CourseWidget.css";
import ViewCourse from "./ViewCourse";

function CourseWidget(props) {

    if (props.enrolled === true) {
        return (
            <div className="widget">
                <h3>{props.title}</h3>
                <img src={props.logo} id="logo" />
                <p>{props.lessons} Lessons | Duration: {props.duration}</p>
                <ViewCourse to={props.to} className="course-button" />
            </div>
        )
    }
}

export default CourseWidget;