import * as React from "react"

interface SeatProps {
  seatNumber: number
}

const Seat = (props: SeatProps) => {
  return (
    <td>
      <span className="button">{props.seatNumber}</span>
    </td>
  )
}

export default Seat
