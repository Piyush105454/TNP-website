import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginWindow from "./components/LoginWindow";
import SignUp from "./components/Signup"; // Assuming you have a SignUp component
import Dashboard from "./components/Dashboard";
import SignInPage from "./components/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginWindow />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignInPage />} />

      </Routes>
    </Router>
  );
}

export default App;
