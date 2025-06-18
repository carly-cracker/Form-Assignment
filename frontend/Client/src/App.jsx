import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Homepage from './Homepage';
import Signup from './Signup';
import './App.css'; 
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}){
  const isLoggedIn = localStorage.getItem("loggedIn")==="true"
  return isLoggedIn? children :<Navigate to= "/login"/>
}

function App() {
    return (
      <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="/homepage"
                    element={
                        <PrivateRoute>
                            <Homepage />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;