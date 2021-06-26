import { Visibility } from "@material-ui/icons"
import "./index.css"

export default function WidgetSmall() {
  return (
    <div className="widgetSmall">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?auto=format&fit=crop&w=200&q=80"
            alt=""
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?auto=format&fit=crop&w=200&q=80"
            alt=""
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?auto=format&fit=crop&w=200&q=80"
            alt=""
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?auto=format&fit=crop&w=200&q=80"
            alt=""
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?auto=format&fit=crop&w=200&q=80"
            alt=""
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
