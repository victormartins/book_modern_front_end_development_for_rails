import * as React from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { VenueState } from "./venue_reducer"

const Header = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 15px;
  margin-right: 15px;
`

const options = seatsInRow => {
  const arrayOfNumbers = Array.from(Array(seatsInRow).keys())
  return arrayOfNumbers.map(i => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ))
}

export const VenueHeader = () => {
  const seatsInRow = useSelector<VenueState, number>(state => state.seatsInRow)
  const dispatch = useDispatch()

  function ticketsToBuyChanged(event: React.SyntheticEvent): void {
    const target = event.target as HTMLSelectElement
    dispatch({
      type: "setTicketsToBuy",
      amount: parseInt(target.value, 10),
    })
  }

  return (
    <div>
      <Header>How many tickets would you like?</Header>
      <span className="select">
        <select onChange={ticketsToBuyChanged}>{options(seatsInRow)}</select>
      </span>
    </div>
  )
}

export default VenueHeader
