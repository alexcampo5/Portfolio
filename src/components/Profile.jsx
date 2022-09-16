import headshot from '../assets/Headshot1.jpeg'

export default function Profile () {
  return (
    <div id='profile' className='profile'>
      <div className='headshot-container'>
        <div className='inner-headshot-container'>
          <img src={headshot} alt='profile' className='headshot'/>
        </div>
      </div>
      <div className='profile-text-container'>
        <h1>My name is Alex Campo, </h1>
        <h2>and I am a full stack software developer based out of Austin, Tx.</h2>
        <p>I am a detail-oriented and determined software developer who has the rare combination of technical acuity as well as client relationship management from leading organizations across a variety of industries. Teamwork is at the center of everything I do, and believe that working and learning alongside others lifts everyone up together.</p>
      </div>
    </div>
  )
}