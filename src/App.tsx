import React from "react"
import Topbar from "./app/components/Topbar"
import Sidebar from "./app/components/Sidebar"
import Homepage from "./app/pages/Homepage"
import UserList from "./app/pages/UserList"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./App.css"

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
