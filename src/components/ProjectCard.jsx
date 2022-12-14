

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <img src={props.screenshot} alt='screenshot' className="screenshot"/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href={props.deployment} target='_blank' rel="noreferrer">Deployment Link</a>
      <div className="stack-container">
      {props.stack.map((tech) => (
        <div>
          <img src={tech} alt="language icon" className="tech-icon"/>
        </div>
      ))}
      </div>
    </div>
  )
}
