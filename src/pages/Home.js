import './Home.css';
import ViewCourse from '../components/ViewCourse';
import python from "../assets/python-screen.png"

function Home() {
    return (
        <div className='Home'>
            <h1>Explore the World of Computer Science</h1>
            <p className='about'>
                Our courses and videos will allow our students to learn the concepts of computer science and enable them to create programs and
                application that will help themselves and others to achieve their goals.
            </p>
            <div className='hor-sec'>
                <div className='lang-left'>
                    <h2 className='langinfo'>Learn Python</h2>
                    <p className='langinfo'>
                        Python is a simple and easy to learn interpreted language that allows high user functionality.
                        Mainly used in fields like Artificial Intelligence and Data Science, Python allows programmers to create dynamic apps and programs with its useful built in libraries.
                    </p>
                    <ViewCourse to="/python" />
                </div>
                <div className='img-right'>
                    <img src={python} alt='python' id="python-screen" />
                </div>
            </div>
            <div className='lang-right'>
                <h2 className='langinfo'>Learn Java</h2>
                <p className='langinfo'>
                    Java is an object-oriented programming language that allows programmers to create templates of real-world objects.
                    With its slogan "Write Once, Run Anywhere", Java allows you to make cross platform apps and is used everywhere.
                </p>
                <ViewCourse to="/java" />
            </div>
        </div>
    )
}

export default Home;