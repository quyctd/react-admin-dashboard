import React from "react"
import Topbar from "./app/components/Topbar"
import Sidebar from "./app/components/Sidebar"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
      </div>
    </div>
  )
}

export default App
