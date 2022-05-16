import './Courses.css';
import { useState } from 'react';

function Courses() {

    const [courses, setCourses] = useState(null);

    const fetching = async (path) => {
        try {
            const fetched = await fetch('http://127.0.0.1:8000/' + path)
            const response = await fetched.json();
            setCourses(response);
        } catch (err) {
            setCourses("An Error Occurred");
        }
    }

    fetching('courses/');

    return (
        <div>
            <h1>{courses}</h1>
        </div>
    );
}

export default Courses;