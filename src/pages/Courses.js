import './Courses.css';
import { useState } from 'react';
import CourseWidget from '../components/CourseWidget';
import python from "../assets/pythonlogo.png";
import java from "../assets/java-logo-noword.png"
import algs from "../assets/algs-datastructs.png"

function Courses() {

    const [courses, setCourses] = useState(null);

    const fetching = async () => {
        try {
            const fetched = await fetch('http://127.0.0.1:8000/courses/');
            const response = await fetched.json();
            setCourses(response);
            console.log(courses);
        } catch (err) {
            setCourses("An Error Occurred");
        }
    }

    fetching();

    return (
        <div>
            <CourseWidget enrolled={true} title="Python Programming" logo={python} lessons={10} duration="1:00" to="/python" />
            <CourseWidget enrolled={true} title="Java Programming" logo={java} lessons={10} duration="1:00" to="/java" />
            <CourseWidget enrolled={true} title="Algorithms and Data Structures" logo={algs} lessons={10} duration="1:00" to="/algorithms-data-structures" />
        </div>
    );
}

export default Courses;