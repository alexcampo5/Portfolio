import github from '../assets/github-sign.png'
import linkedin from '../assets/linkedin.png'
// import email from '../assets/email.png'

export default function SocialsBar () {
  return (
    <div className="socialbar">
      <div className="social-bar-container">
        <a href="https://www.linkedin.com/in/alexcampo5/" target="_blank" rel="noreferrer"><img src={linkedin} alt='linkedin' className='social-icon'/></a>
        <a href='https://github.com/alexcampo5' target='_blank' rel="noreferrer"><img src={github} alt='github' className='social-icon'/></a>
        {/* <img src={email} alt="email" className='social-icon' id='email'/> */}
      </div>
    </div>
  )
}