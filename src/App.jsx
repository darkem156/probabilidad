import { useState } from 'react'
import Header from './components/Header'
import Index from './components/Index'
import Team from './components/Team'
import './App.css'

function App() {
  const [section, setSection] = useState("Index")

  return (
    <>
      <Header section={ section } setSection={ setSection } />
      <main>
        { section === "Index"
          ? <Index />
          : <Team setSection= { setSection } />
        }
      </main>
    </>
  )
}

export default App
