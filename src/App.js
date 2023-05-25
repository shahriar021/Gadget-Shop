
import './App.css';
import Home from './screens/Home';
//import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
  
} from "react-router-dom";
import Login from './screens/Login';
import Signup from "./screens/Signup";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { CartProvider } from './components/usecontextusereducer';




 

function App() {
  
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
