import './App.css'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'
import Profile from './components/Profile'
import Resume from './components/Resume'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <Portfolio />
      <Resume />
    </div>
  )
}

export default App
