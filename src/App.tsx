import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginScreen from './components/login-screen/loginScreen'
import HomeScreen from './components/home-screen/homeScreen'
import RegistrationScreen from './components/registration-screen/registrationScreen'
import MovieScreen from './components/movie-screen/movie-screen'
import SearchScreen from './components/search-screen/search-screen'
import ErrorScreen from './components/error-screen/errorScreen'
import { AppRoute } from './const'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Registration} element={<RegistrationScreen />} />
        <Route path={AppRoute.Home} element={<HomeScreen />} />
        <Route path={AppRoute.MovieScreen} element={<MovieScreen />} />
        <Route path={AppRoute.SearchScreen} element={<SearchScreen />} />
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App