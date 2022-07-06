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
                <div className="buttons">
                    <div className="opts" id="vc">
                        <ViewCourse to={props.to} className="course-button" inline={props.inline} />
                    </div>
                    <div className="opts" id="enr">
                        <EnrollCourse cId={props.cId} />
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseWidget;