import Nav from "./components/Navigation/Nav";
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
import { AppRoutes } from "./routes/AppRoutes";




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
      <div className="App">
        <div className="App-navigation">
          <Nav />
        </div>
        <div className="App-container">
          <AppRoutes />
        </div>
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
