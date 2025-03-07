import {BrowserRouter as  Router, Routes,Route } from 'react-router-dom';
import { SignUpPage } from './pages/SignUpPage';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    
    </div>
    </Router>
  );
}

export default App;
