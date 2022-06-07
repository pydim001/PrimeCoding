import './Courses.css';
import { useState } from 'react';
import CourseWidget from '../components/CourseWidget';
import python from "../assets/pythonlogo.png";
import java from "../assets/java-logo-noword.png"
import algs from "../assets/algs-datastructs.png";
import { getFetch } from '../fetch';

function Courses() {

    // eslint-disable-next-line
    const [data, setData] = useState();
    getFetch("courses/").then(res => { setData(res) });

    return (
        <div className='courses'>
            <CourseWidget enrolled={true} title="Python Programming" logo={python} lessons={10} duration="1:00" to="/python" inline={true} />
            <CourseWidget enrolled={true} title="Java Programming" logo={java} lessons={10} duration="1:00" to="/java" inline={true} />
            <CourseWidget enrolled={true} title="Algorithms and Data Structures" logo={algs} lessons={10} duration="1:00" to="/algorithms-data-structures" inline={true} />
        </div>
    );
}

export default Courses;