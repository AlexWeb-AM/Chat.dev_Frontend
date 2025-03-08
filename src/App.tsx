import {BrowserRouter as  Router, Routes,Route } from 'react-router-dom';
import { SignUpPage } from './pages/SignUpPage';
import { LoginPage } from './pages/LoginPage';
import { ToastContainer } from 'react-toastify';
import { Home } from './pages/Home';


function App() {
  return (
    <Router>
    <div className="App">
    <ToastContainer position="top-right" theme='dark' autoClose={3000} />

      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/user/:id' element={<Home />} />
      </Routes>
    
    </div>
    </Router>
  );
}

export default App;
