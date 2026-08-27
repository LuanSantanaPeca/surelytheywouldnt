//import './App.css'
import { Routes, Route } from 'react-router-dom'
import Logo from './pages/logo/Logo'

function App() {
  return (
    <>
      <Routes>
        <Route path="/logo" element={<Logo/>}/>
      </Routes>
    </>
  )
}

export default App