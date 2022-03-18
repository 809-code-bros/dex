import { useState } from 'react'
import logo from './assets/rxjs.svg'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom"

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar'
import { CreatePage } from './Components/CreateAccount/CreatePage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      {/* <CreatePage /> */}

      <Routes>
          <Route path ="/" element={<Home />}/>
          <Route path = "/CreateAccount" element= {<CreatePage />}/>
          <Route />
          <Route />
      </Routes>


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount(count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          This is the beginning of Dex <br/>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header> */}
    </div>
  )
}

export default App
