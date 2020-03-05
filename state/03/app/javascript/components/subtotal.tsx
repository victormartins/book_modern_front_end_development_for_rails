import * as React from "react"
import styled from "styled-components"
import { IsVenueContext, VenueContext } from "./app"

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
  const context = React.useContext<IsVenueContext>(VenueContext)

  const onClear = () => {
    context.dispatch({ type: "clearHolds" })
  }

  return (
    <>
      <Header>
        <span>Current Tickets Purchased: &nbsp;</span>
        <span>{context.state.myHeldTickets.length}</span>
      </Header>
      <Header>
        <span>Current Tickets Cost: &nbsp;</span>
        <span>${context.state.myHeldTickets.length * 15}.00</span>
      </Header>
      <Button className="button is-primary" onClick={onClear}>
        Clear Tickets
      </Button>
    </>
  )
}

export default Subtotal
