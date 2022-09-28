import ProjectCard from "./ProjectCard"
import triviaTime from '../assets/TriviaTimeScreenshot.png'
import myPantry from '../assets/My_Pantry_Large.png'
import react from '../assets/react (1).png'
import html from '../assets/html-5.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import sql from '../assets/database.png'
import mongo from '../assets/pngwing.com.png'
import soccer from '../assets/soccerdb.png'
import thriftr from '../assets/thriftrhome.png'

export default function Portfolio () {

  let portfolio = [
    {
      title: 'Trivia Time',
      screenshot: triviaTime,
      description: 'A simple trivia game designed to test your knowledge across a variety of categories!',
      deployment: 'https://abctrivia.surge.sh/',
      stack: [html, css, js]
    },
    {
      title: 'World Soccer DB',
      screenshot: soccer,
      description: 'A quick database client built in a week designed to help soccer fans keep track of their favorite players.',
      deployment: '',
      stack: [react, js, mongo]
    },
    {
      title: 'thriftR',
      screenshot: thriftr,
      description: `A social media app designed for people to share their thrift finds. Group project where I designed the structure of the front end including CRUD functionality.`,
      deployment: 'https://thriftr-frontend.netlify.app',
      stack: [react, js, sql]
    },
    {
      title: 'My-Pantry',
      screenshot: myPantry,
      description: `An app designed to help inspire the quintessential home cook to take what's in their pantry and create special meals from everyday ingredients.`,
      deployment: 'https://my-pantry-abc.netlify.app/',
      stack: [react, js, sql]
    },
  ]

  portfolio = portfolio.reverse()

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