import atsResume from '../assets/ATSResumev1.png'
import professionalResume from '../assets/PlaceholderResume.png'

export default function Resume () {
  return (
    <div id='resume' className="resume-div">
      <h1>Resumé</h1>
      <div className='resume-container'>
        <div className='ats-resume-holder'>
          <h2>ATS Resume</h2>
          <img src={atsResume} alt='ATS resume' className='resume'></img>
        </div>
        <div className='professional-resume-holder'>
          <h2>Styled Resume</h2>
          <img src={professionalResume} alt='professional resume' className='resume'></img>
        </div>
      </div>
    </div>
  )
}