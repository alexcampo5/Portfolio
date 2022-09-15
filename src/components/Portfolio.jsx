import ProjectCard from "./ProjectCard"
import triviaTime from '../assets/TriviaTimeScreenshot.png'
import react from '../assets/react.png'
import html from '../assets/html-5.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import express from '../assets/express.png'

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
      screenshot: '',
      description: '',
      deployment: '',
      stack: [react, express, 'Mongo DB']
    },
    {
      title: 'thriftR',
      screenshot: '',
      description: '',
      deployment: '',
      stack: [react, express, 'PostgreSQL']
    },
    {
      title: 'Capstone',
      screenshot: '',
      description: '',
      deployment: '',
      stack: [react, 'Python3', 'Django']
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