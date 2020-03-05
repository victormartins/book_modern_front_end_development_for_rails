import * as React from "react"
import { Venue } from "./venue"
import {
  TicketData,
  VenueAction,
  VenueState,
  initialState,
  venueReducer,
} from "./venue_reducer"

export interface AppProps {
  concertId: number
  rows: number
  seatsInRow: number
  otherHeldTickets: TicketData[]
}

export interface IsVenueContext {
  state: VenueState
  dispatch: React.Dispatch<VenueAction>
}

export const VenueContext = React.createContext<IsVenueContext>(null)

export const App = (props: AppProps) => {
  const [state, dispatch] = React.useReducer(
    venueReducer,
    initialState(props)
  )

  return (
    <VenueContext.Provider value={{ state, dispatch }}>
      <Venue />
    </VenueContext.Provider>
  )
}
