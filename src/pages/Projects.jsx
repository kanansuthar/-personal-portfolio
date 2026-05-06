import { useEffect,useState }  from 'react';
import React from 'react';
import './Projects.css';
import TodoApp from './Todoapp';
function Projects(props) {
    const [repos, setRepos] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/kanansuthar/repos')
        .then(res=> res.json())
        .then(data => setRepos(data));
    },[]);

    return (
        <section id="projects">

            <h2>My Projects</h2>
            
            <div className="projects-container">
                {repos.slice(0,3).map((repo)=>{
                    <div className="project-card" key={repo.id}>
                        <h3>{repo.name}</h3>
                        <p>Stars: {repo.stargazers_count}</p>
                        <p>{repo.language}</p>
                        <p>{repo.description}</p>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            View on GitHub
                        </a>
                    </div>
                })}


            <div className="project-card">
                <h3>Portfolio Website</h3>
                <p>Personal portfolio made using React.</p>
                <a href="https://github.com/kanansuthar/-personal-portfolio" target="_blank" rel="noopener noreferrer">
                    <button>View Code</button>
                </a>
            </div>

            <div className="project-card">
                <h3>Todo App</h3>
                <p>Task manager built using JavaScript</p>
                <a href="https://github.com/kanansuthar/-personal-portfolio/blob/main/src/pages/Todoapp.jsx">
                  <button>View Code</button>
                </a>
            </div>

            <div className="project-card">
                <h3>Weather App</h3>
                <p>Weather forecast app using OpenWeatherMap API.</p>
                <a href="https://github.com/kanansuthar/weather-app" target="_blank" rel="noopener noreferrer">
                    <button>View Code</button>
                </a>
            </div>
        </div>
     </section>
    )
}

export default Projects;