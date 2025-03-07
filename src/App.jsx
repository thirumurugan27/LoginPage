
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import LoginPage from './LoginPage'

function App() {
  

  return (
    <>

        <BrowserRouter>
          <Routes>
              <Route path='/LoginPage/' element={<Home/>}></Route>
              <Route path='/LoginPage/login' element={<LoginPage/>}></Route>
          </Routes>
        </BrowserRouter>

    
    </>
  )
}

export default App
