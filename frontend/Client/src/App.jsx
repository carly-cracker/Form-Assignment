import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Homepage from './Homepage';
import Signup from './Signup';
import './App.css'; 

function App() {
     

    return (
      <div className="App">
        <div className="header">
          <a href="/">Login</a>
          <a href="/Signup">Signup</a>
        </div>
        <Router>

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Homepage" element={<Homepage />} />
                <Route path="/Signup" element={<Signup />} />
            </Routes>
        </Router>
      </div>
    );
}

export default App;