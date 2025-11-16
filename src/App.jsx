import Home from './pages/Home'
import About from './pages/About'
import './App.css'
import { Route, Routes } from 'react-router'
import Services from './pages/Services'
import Error from './pages/Error'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
      </Routes>

    </>
  )
}

export default App