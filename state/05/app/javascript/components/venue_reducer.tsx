import { AppProps } from "./app"
import { createStore } from "redux"

export interface TicketData {
  id: number
  row: number
  number: number
  status: string
}

export interface VenueState {
  concertId: number
  rows: number
  seatsInRow: number
  otherHeldTickets: TicketData[]
  ticketsToBuy: number
  myHeldTickets: TicketData[]
}

export interface SetTicketToBuy {
  type: "setTicketsToBuy"
  amount: number
}

export interface HoldTicket {
  type: "holdTicket"
  seatNumber: number
  rowNumber: number
}

export interface UnholdTicket {
  type: "unholdTicket"
  seatNumber: number
  rowNumber: number
}

export interface SetVenueData {
  type: "setVenueData"
  data: TicketData[]
}

export interface ClearHolds {
  type: "clearHolds"
}

export interface InitFromProps {
  type: "initFromProps"
  props: AppProps
}

export type VenueAction =
  | SetTicketToBuy
  | HoldTicket
  | UnholdTicket
  | SetVenueData
  | ClearHolds
  | InitFromProps

export const initialState = {
  rows: 1,
  seatsInRow: 1,
  concertId: 0,
  otherHeldTickets: [],
  ticketsToBuy: 1,
  myHeldTickets: [],
}

export const venueReducer = (
  state: VenueState = initialState,
  action: VenueAction
): VenueState => {
  switch (action.type) {
    case "setTicketsToBuy":
      return { ...state, ticketsToBuy: action.amount }
    case "holdTicket": {
      const newTickets = Array.from(Array(state.ticketsToBuy).keys()).map(
        index => {
          return {
            id: 0,
            row: action.rowNumber,
            number: action.seatNumber + index,
            status: "held",
          }
        }
      )
      return {
        ...state,
        myHeldTickets: [...state.myHeldTickets, ...newTickets],
      }
    }
    case "unholdTicket": {
      const newTickets = state.myHeldTickets.filter(ticket => {
        const rowMatch = ticket.row == action.rowNumber
        const seatDiff = ticket.number - action.seatNumber
        const seatMatch = seatDiff >= 0 && seatDiff < state.ticketsToBuy
        return !(rowMatch && seatMatch)
      })
      return { ...state, myHeldTickets: newTickets }
    }
    case "clearHolds": {
      return { ...state, myHeldTickets: [] }
    }
    case "setVenueData": {
      return { ...state, otherHeldTickets: action.data }
    }
    case "initFromProps": {
      return {
        rows: action.props.rows,
        seatsInRow: action.props.seatsInRow,
        concertId: action.props.concertId,
        otherHeldTickets: action.props.otherHeldTickets,
        ticketsToBuy: 1,
        myHeldTickets: [],
      }
    }
    default:
      return state
  }
}

export const venueStore = createStore(venueReducer)
