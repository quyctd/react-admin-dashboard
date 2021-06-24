import "./index.css"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

interface Props {
  title: String
  data: any
  dataKey: any
  grid: Boolean
}

export default function Chart(props: Props) {
  const { title, data, dataKey, grid } = props

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          {grid && <CartesianGrid strokeDasharray="4 4" />}
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
