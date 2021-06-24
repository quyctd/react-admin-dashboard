import FeaturedInfo from "../../components/FeaturedInfo"
import Chart from "../../components/Chart"
import { userData } from "../../data"
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
    </div>
  )
}

export default Homepage
