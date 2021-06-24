import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import "./index.css"

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,514</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <div className="featuredSub">Compared to the last month</div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,114</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <div className="featuredSub">Compared to the last month</div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Costs</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,554</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <div className="featuredSub">Compared to the last month</div>
      </div>
    </div>
  )
}

export default FeaturedInfo
