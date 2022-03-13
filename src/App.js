import React, { useEffect } from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from "./components/DashboardPage/Dashboard";
import Login from "./components/LoginPage/Login";
import { StylesProvider } from '@material-ui/core'
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {

  return (
    <StylesProvider injectFirst>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<PrivateRoute />}>
              <Route exact path='/' element={<Dashboard />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </StylesProvider>
  );
}


export default App;
