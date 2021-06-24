import React from "react"
import Topbar from "./app/components/Topbar"
import Sidebar from "./app/components/Sidebar"
import Homepage from "./app/pages/Homepage"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Homepage />
      </div>
    </div>
  )
}

export default App
