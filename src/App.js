import Nav from "./components/Navigation/Nav";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
        <Routes>
          <Route path="/news" Component={() => <div>news</div>} />
          <Route path="/about" Component={() => <div>about</div>} />
          <Route path="/contact" Component={() => <div>contact</div>} />
          <Route path="/" Component={() => <div>home</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" Component={() => <div>undefine</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
