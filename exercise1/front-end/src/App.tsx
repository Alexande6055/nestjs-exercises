import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<div><h1>Pagina no Encontrada</h1></div>} />
    </Routes>
  )
}

export default App
