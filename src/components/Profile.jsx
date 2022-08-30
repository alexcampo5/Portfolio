import headshot from '../assets/Headshot1.jpeg'

export default function Profile () {
  return (
    <div id='profile' className='profile'>
      <img src={headshot} alt='profile' className='headshot'/>
      <h1>Alex Campo</h1>
      <h2>Full Stack Software Developer</h2>
    </div>
  )
}