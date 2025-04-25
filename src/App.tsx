import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginScreen from './components/login-screen/loginScreen'
import RegistrationScreen from './components/registration-screen/RegistrationScreen'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginScreen/>} />
        <Route path='/registration' element={<RegistrationScreen/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App