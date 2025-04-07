import {BrowserRouter, Routes, Route} from 'react-router'
import './App.css'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import HomePage from './pages/HomePage'
import AddTask from './components/AddTask'

function App() {
 
  return (
    <>
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<LandingPage />}/>
         <Route path='/login' element={<Login />} />
         <Route path='/register' element={<Register />} />
         <Route path='/home' element={<HomePage />} />
         <Route path="/addtask" element={<AddTask />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
