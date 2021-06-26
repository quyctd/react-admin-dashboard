import "./index.css"

const Button = (props: any) => {
  const { type } = props

  return <button className={`widgetLgButton ${type}`}>{type}</button>
}

export default function WidgetLarge() {
  return (
    <div className="widgetLarge">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?auto=format&fit=crop&w=200&q=80"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Karol</span>
            </td>
            <td className="widgetLgDate">02 Jun 2021</td>
            <td className="widgetLgAmount">$200.11</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?auto=format&fit=crop&w=200&q=80"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Karol</span>
            </td>
            <td className="widgetLgDate">02 Jun 2021</td>
            <td className="widgetLgAmount">$200.11</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?auto=format&fit=crop&w=200&q=80"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Karol</span>
            </td>
            <td className="widgetLgDate">02 Jun 2021</td>
            <td className="widgetLgAmount">$200.11</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?auto=format&fit=crop&w=200&q=80"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Karol</span>
            </td>
            <td className="widgetLgDate">02 Jun 2021</td>
            <td className="widgetLgAmount">$200.11</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
