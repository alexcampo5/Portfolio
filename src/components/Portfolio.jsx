import ProjectCard from "./ProjectCard"
import triviaTime from '../assets/TriviaTimeScreenshot.png'
import react from '../assets/React.png'

export default function Portfolio () {

  let portfolio = [
    {
      title: 'Trivia Time',
      screenshot: triviaTime,
      description: 'A simple trivia game designed to test your knowledge across a variety of categories!',
      deployment: 'https://abctrivia.surge.sh/',
      stack: ['HTML', 'CSS', 'Vanilla JS']
    },
    {
      title: 'World Soccer DB',
      screenshot: '',
      description: '',
      deployment: '',
      stack: ['ReactJs', 'ExpressJS', 'Mongo DB']
    },
    {
      title: 'thriftR',
      screenshot: '',
      description: '',
      deployment: '',
      stack: ['ReactJS', 'ExpressJS', 'PostgreSQL']
    },
    {
      title: 'Capstone',
      screenshot: '',
      description: '',
      deployment: '',
      stack: ['ReactJs', 'Python3', 'Django']
    },
  ]

  return (
    <div id='portfolio' className="portfolio">
      <h1>Project Work</h1>
      <div className="all-projects-container">
        {portfolio.map((project) => (
          <div>
            <ProjectCard title = {project.title} screenshot = {project.screenshot} description = {project.description} deployment = {project.deployment} stack = {project.stack}/>
          </div>
        ))}
      </div>
    </div>
  )
}