import * as React from "react"

interface SeatProps {
  seatNumber: number
  initialStatus: string
}

export const Seat = (props: SeatProps) => {
  const [status, setStatus] = React.useState(props.initialStatus)

  function changeState(): void {
    if (status === "open") {
      setStatus("held")
    } else if (status === "held") {
      setStatus("open")
    }
  }

  function stateDisplayClass(): string {
    if (status === "open") {
      return "has-background-white"
    } else if (status === "held") {
      return "has-background-success"
    } else {
      return "has-background-warning"
    }
  }

  return (
    <td>
      <span className={`button ${stateDisplayClass()}`} onClick={changeState}>
        {props.seatNumber}
      </span>
    </td>
  )
}

export default Seat
