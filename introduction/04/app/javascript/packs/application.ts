import * as ActiveStorage from "@rails/activestorage"
import Rails from "@rails/ujs"
import * as Channels from "channels"
import Turbolinks from "turbolinks"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import GenericToggle from "src/generic_toggle"

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".js--day").forEach(day => {
    new GenericToggle(
      day,
      ".js--day-button",
      ".js--day-text",
      (element, _, hidden) => {
        const buttonText = day.querySelector(".js--button-text")
        if (buttonText == null) {
          return
        }
        (buttonText as HTMLElement).innerText = hidden ? "Show" : "Hide"
      }
    ).initHandlers()
  })

  document.querySelectorAll(".js--schedule-day").forEach(button => {
    const buttonSelector = `#${button.id}`
    const targetSelector = buttonSelector.replace("toggle", "body")
    new GenericToggle(
      document,
      buttonSelector,
      targetSelector,
      (element, _, hidden) => {
        element.classList.toggle("has-text-danger", hidden)
      }
    ).initHandlers()
  })
})
