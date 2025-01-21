import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import Home from "../pages/home/Home.jsx";
import SignIn from "../pages/sign-in/SignIn.jsx";
import User from "../pages/user/User.jsx";
import Error from '../pages/error/error.jsx';

function App() {

  const token = useSelector((state) => state.login.token);

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={token ? <User /> : <Navigate to="/sign-in" />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    
  );
}

export default App;
