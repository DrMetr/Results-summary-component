import './App.css'
import Result from './components/Result.jsx'
import Summary from './components/Summary.jsx'

function App() {

  return (
    <div class='card flex flex-col md:flex-row 
                w-full md:min-w-[500px] md:w-[45vw] 
                h-full md:h-[60vh] 
                rounded-xl bg-white'>
      <Result />
      <Summary />
      </div>
  )
}

export default App
