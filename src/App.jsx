//import './App.css'
import { Routes, Route } from 'react-router-dom'
import Logo from './pages/logo/Logo'
import Home from './pages/home/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/logo" element={<Logo/>}/>
      </Routes>
    </>
  )
}

export default App