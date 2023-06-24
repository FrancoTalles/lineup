import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';


function App() {
  return (
    <>
      <ToastContainer theme='dark' />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}/>
          <Route path='/signup' element={<SignUpPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App