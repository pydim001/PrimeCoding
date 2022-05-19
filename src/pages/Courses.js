import './Courses.css';
import { useState } from 'react';

function Courses() {

    const [courses, setCourses] = useState(null);

    const fetching = async () => {
        try {
            const fetched = await fetch('http://127.0.0.1:8000/courses/');
            const response = await fetched.json();
            setCourses(response);
        } catch (err) {
            setCourses("An Error Occurred");
        }
    }

    fetching();

    return (
        <div>
            <h1>{courses}</h1>
        </div>
    );
}

export default Courses;