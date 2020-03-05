import * as React from "react"
import Row from "./row"
import { useSelector } from "react-redux"
import { VenueState } from "./venue_reducer"

const rowItems = rows => {
  const rowNumbers = Array.from(Array(rows).keys())
  return rowNumbers.map(rowNumber => (
    <Row key={rowNumber} rowNumber={rowNumber} />
  ))
}

export const VenueBody = () => {
  const rows = useSelector<VenueState, number>(state => state.rows)
  return (
    <table className="table">
      <tbody>{rowItems(rows)}</tbody>
    </table>
  )
}

export default VenueBody
