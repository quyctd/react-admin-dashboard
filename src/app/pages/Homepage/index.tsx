import FeaturedInfo from "../../components/FeaturedInfo"
import Chart from "../../components/Chart"
import { userData } from "../../data"
import WidgetSmall from "../../components/WidgetSmall"
import WidgetLarge from "../../components/WidgetLarge"
import "./index.css"

function Homepage() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid={true}
        dataKey="activeUser"
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  )
}

export default Homepage
