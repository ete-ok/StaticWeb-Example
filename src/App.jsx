import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Home, About, Downloads, Settings} from './Sessions/AllSessions'
function App() {
  const [session, setSession] = useState("HOME")

  const toggleSession = (sessionName) => {
    setSession(sessionName)
  }
  const currentSession = () => {
    switch (session) {
      case "HOME":
        return <Home/>
        break;
      case "SETTINGS":
        return <Settings/>
        break;
      case "DOWNLOAD":
        return <Downloads/>
        break;
      case "ABOUT":
        return <About/>
        break;   
      default:
        break;
    }
  }
  return (
    <>
      <header className='header'>
        <h3 className='header-button' onClick={()=> {
          toggleSession("HOME")
        }}>Home</h3>
        <h3 className='header-button' onClick={()=> {
          toggleSession("ABOUT")
        }}>About</h3>
        <h3 className='header-button' onClick={()=> {
          toggleSession("DOWNLOAD")
        }}>Downloads</h3>
        <h3 className='header-button' onClick={()=> {
          toggleSession("SETTINGS")
        }}>Settings</h3>
      </header>
      <div>
        {session && currentSession()}
      </div>
    </>
  )
}
export default App
