import * as React from "react"
import * as ReactDOM from "react-dom"
import Venue from "../components/venue"

document.addEventListener("turbolinks:load", () => {
  const element = document.getElementById("react-element")
  if (element) {
    ReactDOM.render(
      <Venue
        rows={parseInt(element.dataset["rows"], 10)}
        seatsInRow={parseInt(element.dataset["seatsPerRow"], 10)}
        concertId={parseInt(element.dataset["concertId"], 10)}
      />,
      document.getElementById("react-element")
    )
  }
})
