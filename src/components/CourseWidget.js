import "./CourseWidget.css";
import EnrollCourse from "./EnrollCourse";
import ViewCourse from "./ViewCourse";

function CourseWidget(props) {

    if (props.enrolled === true) {
        return (
            <div className="widget">
                <h3>{props.title}</h3>
                <img src={props.logo} id="logo" alt="logo" />
                <p className="txt">{props.lessons} Lessons | Duration: {props.duration}</p>
                <div>
                    <ViewCourse to={props.to} className="course-button" inline={props.inline} />
                    <EnrollCourse />
                </div>
            </div>
        )
    }
}

export default CourseWidget;