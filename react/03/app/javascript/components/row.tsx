import * as React from "react"
import Seat from "../components/seat"

interface RowProps {
  rowNumber: number
  seatsInRow: number
}

const Row = (props: RowProps) => {
  const seatItems = Array.from(Array(props.seatsInRow).keys()).map(
    seatNumber => {
      return (
        <Seat key={seatNumber} seatNumber={seatNumber} initialStatus="open" />
      )
    }
  )
  return <tr>{seatItems}</tr>
}

export default Row
