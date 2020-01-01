import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import BasicLayout from "./common/layouts/BasicLayout";

function App() {
  return <div className="App">
    <BrowserRouter>
      <Switch>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/">
          <BasicLayout>
            <Switch>
              <Route path="/dashboard">
                <Dashboard/>
              </Route>
              <Route path="/merchants">
                <Merchants/>
              </Route>
              <Route path="/users">
                <Users/>
              </Route>

              {/*default route*/}
              <Route path="/">
                <Redirect to={'/dashboard'}/>
              </Route>

            </Switch>
          </BasicLayout>
        </Route>


      </Switch>
    </BrowserRouter>
  </div>;
}


function Login() {
  return <h2>Login</h2>;
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function Merchants() {
  return <h2>Merchants</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
