import * as React from "react"
import Seat from "./seat"
import { useSelector } from "react-redux"
import { VenueState } from "./venue_reducer"

interface RowProps {
  rowNumber: number
}

const Row = ({ rowNumber }: RowProps) => {
  const seatsInRow = useSelector<VenueState, number>(state => state.seatsInRow)

  const seatItems = Array.from(Array(seatsInRow).keys()).map(seatNumber => {
    return (
      <Seat
        key={seatNumber}
        seatNumber={seatNumber + 1}
        rowNumber={rowNumber + 1}
      />
    )
  })

  return <tr>{seatItems}</tr>
}

export default Row
