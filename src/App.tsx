import {BrowserRouter as  Router, Routes,Route } from 'react-router-dom';
import { SignUpPage } from './pages/SignUpPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        
      </Routes>
    
    </div>
    </Router>
  );
}

export default App;
