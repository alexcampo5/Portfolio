import './App.css'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'
import Profile from './components/Profile'
import Resume from './components/Resume'
import SocialsBar from './components/SocialsBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <SocialsBar />
      <Profile />
      <Portfolio />
      <Resume />
    </div>
  )
}

export default App
