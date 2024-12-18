import NavHeader from "./components/Navigation/NavHeader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "./components/Loading/Loading";
import {
  BrowserRouter as Router,
  Routes,
  useNavigate,
  Route,
  Link,
  json
} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import _ from 'lodash';
import { AppRoutes } from "./routes/AppRoutes";
import { userContext } from "./context/userContext";



function App() {
  const [account, setAccount] = useState({});
  const { dataUser } = useContext(userContext);
  return (

    <Router>
      <div className="App">
        <div className="App-navigation">
          <NavHeader />
        </div>
        <div className="App-container">
          {dataUser.isLoading ? <Loading /> : <AppRoutes />}

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
    </Router>
  );
}

export default App;
