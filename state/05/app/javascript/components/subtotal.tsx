import * as React from "react"
import styled from "styled-components"
import { Subscription } from "@rails/actioncable"
import { useSelector, useDispatch } from "react-redux"
import { VenueState, TicketData } from "./venue_reducer"

const Header = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 15px;
  margin-right: 15px;
`

const Button = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  font-weight: bold;
`

const Subtotal = () => {
  const myHeldTickets = useSelector<VenueState, TicketData[]>(
    state => state.myHeldTickets
  )
  const dispatch = useDispatch()

  const onClear = () => {
    // subscription.perform("removed_from_cart", {
    //   concertId: context.state.concertId,
    //   tickets: context.state.myHeldTickets,
    // })
    dispatch({ type: "clearHolds" })
  }

  return (
    <>
      <Header>
        <span>Current Tickets Purchased: &nbsp;</span>
        <span>{myHeldTickets.length}</span>
      </Header>
      <Header>
        <span>Current Tickets Cost: &nbsp;</span>
        <span>${myHeldTickets.length * 15}.00</span>
      </Header>
      <Button className="button is-primary" onClick={onClear}>
        Clear Tickets
      </Button>
    </>
  )
}

export default Subtotal
