import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './Auth/login'

function App() {

  return (
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/login' element={<Login />}></Route>
   </Routes>
  )
}

export default App
