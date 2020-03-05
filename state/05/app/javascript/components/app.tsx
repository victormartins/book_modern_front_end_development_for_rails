import * as React from "react"
import { Venue } from "./venue"
import {
  TicketData,
  VenueAction,
  VenueState,
  venueStore,
} from "./venue_reducer"
import { createConsumer, Subscription } from "@rails/actioncable"
import { Provider } from "react-redux"

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

export const SubscriptionContext = React.createContext<Subscription>(null)

let appSubscription: Subscription = null

const initSubscription = (
  state: VenueState,
  dispatch: React.Dispatch<VenueAction>
): Subscription => {
  if (!appSubscription) {
    appSubscription = createConsumer().subscriptions.create(
      { channel: "ConcertChannel", concertId: state.concertId },
      {
        received(data) {
          dispatch({ type: "setVenueData", data })
        },
      }
    )
  }
  return appSubscription
}

export const App = (props: AppProps) => {
  venueStore.dispatch({ type: "initFromProps", props })
  return (
    <Provider store={venueStore}>
      <Venue />
    </Provider>
  )
}
