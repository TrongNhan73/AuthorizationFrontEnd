import Nav from "./components/Navigation/Nav";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { User } from "./components/User/User";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Routes,
  useNavigate,
  Route,
  Link,
  json
} from "react-router-dom";
import { useEffect, useState } from "react";
import _ from 'lodash';
import { PrivateRoute } from "./utils/Component.utils";



function App() {
  const [account, setAccount] = useState({});
  useEffect(() => {
    let sessionData = JSON.parse(sessionStorage.getItem('account'));
    if (!sessionData) {

    } else {
      setAccount(sessionData);

    }
  }, [])
  return (
    <Router>
      {account && !_.isEmpty(account) && account.isAuthenticated && <Nav />}
      <div className="App">
        {/* <Nav /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PrivateRoute authentication={account.isAuthenticated}>

            <Route path="/news" Component={() => <div>news</div>} />
            <Route path="/about" Component={() => <div>about</div>} />
            <Route path="/contact" Component={() => <div>contact</div>} />
            <Route path="/" Component={() => <div>home</div>} />

            <Route path="/users" element={<User />} />
            <Route path="*" Component={() => <div>undefine</div>} />

          </PrivateRoute>} />

        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </Router>
  );
}

export default App;
