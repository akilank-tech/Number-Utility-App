import { Routes, Route } from "react-router-dom"
import Counter from './components/counter'
import Random from './components/random'
import Home from './components/home'
import './App.css'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/random" element={<Random/>}></Route>
        <Route path="/counter" element={<Counter/>}></Route>
      </Routes>
  )


}

export default App
