import React from "react"
import { NotificationsNone, Language, Settings } from "@material-ui/icons"
import "./index.css"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">MyAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/30380214"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  )
}
