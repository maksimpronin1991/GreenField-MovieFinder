import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginScreen from './components/login-screen/loginScreen'
import HomeScreen from './components/home-screen/homeScreen'
import RegistrationScreen from './components/registration-screen/registrationScreen'
import MovieScreen from './components/movie-screen/movie-screen'
import SearchScreen from './components/search-screen/search-screen'
import ErrorScreen from './components/error-screen/errorScreen'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/registration' element={<RegistrationScreen />} />
        <Route path='/home' element={<HomeScreen />} />
        <Route path='/movieScreen' element={<MovieScreen />} />
        <Route path='/searchScreen' element={<SearchScreen />} />
        <Route path='*' element={<ErrorScreen />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App