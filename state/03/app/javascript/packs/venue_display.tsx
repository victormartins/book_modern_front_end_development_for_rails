import * as React from "react"
import * as ReactDOM from "react-dom"
import { App } from "../components/app"

document.addEventListener("turbolinks:load", () => {
  const element = document.getElementById("react-element")
  if (element) {
    ReactDOM.render(
      <App
        rows={parseInt(element.dataset["rows"], 10)}
        seatsInRow={parseInt(element.dataset["seatsPerRow"], 10)}
        concertId={parseInt(element.dataset["concertId"], 10)}
        otherHeldTickets={JSON.parse(element.dataset["heldTickets"])}
      />,
      element
    )
  }
})
