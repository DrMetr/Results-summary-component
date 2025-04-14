import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Result from './components/Result.jsx'
import Summary from './components/Summary.jsx'

function App() {

  return (
    <>
    <div class='md:bg-PaleBlue'>
    <div class='card flex flex-row'>
      <Result />
      <Summary />
      </div>
    </div>
    </>
  )
}

export default App
