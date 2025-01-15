import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/home/Home.jsx";
import SignIn from "../pages/sign-in/SignIn.jsx";
import User from "../pages/user/User.jsx";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
    
  );
}

export default App;
