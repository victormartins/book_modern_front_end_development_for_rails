import GenericVisibilityToggle from "src/generic_visibility_toggle"

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".js--day").forEach(day => {
    new GenericVisibilityToggle(
      day,
      ".js--day-button",
      ".js--day-text",
      (visibilityBtn, _targetForVisibility, hidden): void => {
        const buttonText: HTMLElement = visibilityBtn.querySelector(".js--button-text")
        buttonText.textContent = hidden ? "Show" : "Hide"
      }
    ).initHandlers()
  })

  document.querySelectorAll(".js--schedule-day").forEach(button => {
    const visibilityButtonSelector = `${button.id}`
    const targetForVisibilitySelector = visibilityButtonSelector.replace("toggle", "body")
    new GenericVisibilityToggle(
      document,
      visibilityButtonSelector,
      targetForVisibilitySelector,
      (visibilityBtn, _targetForVisibility, hidden): void => {
        visibilityBtn.classList.toggle("has-text-danger", hidden)
      }
    ).initHandlers()
  })
})
