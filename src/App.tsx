import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginScreen from './components/login-screen/loginScreen'
import HomeScreen from './components/home-screen/homeScreen'
import RegistrationScreen from './components/registration-screen/registrationScreen'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginScreen/>} />
        <Route path='/registration' element={<RegistrationScreen/>} />
        <Route path='/home' element={<HomeScreen/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App