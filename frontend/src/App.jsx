import {BrowserRouter, Routes, Route} from 'react-router'
import './App.css'
import './index.css'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import HomePage from './pages/HomePage'
import AddTask from './components/AddTask'
import SchoolDashboard from './components/school/SchoolDashboard'
import { AttendanceComponent } from './components/school/Attendance'
//import  from './components/school/Attendance'

function App() {
 
  return (
    <>
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<LandingPage />}/>
         <Route path='/login' element={<Login />} />
         <Route path='/register' element={<Register />} />
         <Route path='/home' element={<HomePage />} />
         <Route path='/school' element={<SchoolDashboard />} />
         <Route path='/attendance' element={<AttendanceComponent />} />
         <Route path="/addtask" element={<AddTask />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
