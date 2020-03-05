import * as React from "react"
import Row from "./row"

interface VenueProps {
  rows: number
  seatsInRow: number
}

const Venue = (props: VenueProps) => {
  const rowNumbers = [1, 2, 3, 4, 6, 7, 8, 9, 10]
  const rowItems = rowNumbers.map(rowNumber => {
    return (
      <Row
        key={rowNumber}
        rowNumber={rowNumber}
        seatsInRow={props.seatsInRow}
      />
    )
  })
  return (
    <table className="table">
      <tbody>{rowItems}</tbody>
    </table>
  )
}

export default Venue
