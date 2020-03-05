import * as ActiveStorage from "@rails/activestorage"
import Rails from "@rails/ujs"
import * as Channels from "channels"
import "styles/styles"
import Turbolinks from "turbolinks"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import GenericToggle from "src/generic_toggle"

function safeQuerySelector<T extends Element>(
  element: Element,
  selector: string | null,
  defaultResult: T
): T {
  if (selector == null) {
    return defaultResult
  }
  const result: Element | null = element.querySelector(selector)
  if (result === null || result === undefined) {
    return defaultResult
  } else {
    return result as T
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".js--day").forEach(day => {
    new GenericToggle(
      day,
      ".js--day-button",
      ".js--day-text",
      (element, _, hidden) => {
        const buttonText = safeQuerySelector(
          day,
          ".js--button-text",
          document.createElement("div")
        )
        buttonText.innerText = hidden ? "Show" : "Hide"
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
