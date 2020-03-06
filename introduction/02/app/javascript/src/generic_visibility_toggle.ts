import * as ActiveStorage from "@rails/activestorage"
import Rails from "@rails/ujs"
// import * as Channels from "channels"
import Turbolinks from "turbolinks"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

export default class GenericVisibilityToggle {
  // bellow is the type declaration for this class
  toggleVisibilityButtons: NodeListOf<HTMLElement>
  targetForVisiblity: NodeListOf<HTMLElement>
  hidden: boolean

  constructor(
    // The keyword private, when applied in a class constructor, automatically creates a
    // private property in the class of that type without having to separately declare it.
    private parent: Element | Document, // can be a specific element or the document object
    private toggleVisiblityButtonSelector: string,
    private targetForVisiblitySelector: string,

    // The onToggleCallback property bellow is the callback function so that the caller can
    // inject any behaviour to happen after the visiblity toggle.
    // The ? operator shows that this is an optional argument
    // The type of onToggleCallback is a function with it's arguments:
    // toggleVisibilityButton, targetForVisibility, and state
    // that returns void.
    private onToggleCallback?: (
      toggleVisibilityButton: HTMLElement,
      targetForVisibility: HTMLElement,
      state: boolean
    ) => void
  ) {
    this.toggleVisibilityButtons = parent.querySelectorAll(this.toggleVisiblityButtonSelector)
    this.targetForVisiblity = parent.querySelectorAll(this.targetForVisiblitySelector)

    if (this.toggleVisibilityButtons.length == 0) {
      throw `No toggleVisibilityButtons found! Selector: ${this.toggleVisiblityButtonSelector}`
    }

    if (this.targetForVisiblity.length == 0) {
      throw `No targets for visibility found! Selector: ${this.targetForVisiblitySelector}`
    }

    // Check the status of one of the targets to set the initial hidden state of the toggle itself.
    this.hidden = this.targetForVisiblity[0].classList.contains("is-hidden")
    // console.log(`${this.constructor.name} loaded for ${this.parent.id}`)
  }

  initHandlers(): void {
    this.onFilterButtonClick()
  }

  onFilterButtonClick(): void {
    this.toggleVisibilityButtons.forEach(toggleVisibilityBtn =>
      this._addEventListenerTotoggleVisibilityBtn(toggleVisibilityBtn)
    )
  }

  // private ------------------------------------------------------------

  _addEventListenerTotoggleVisibilityBtn = (toggleVisibilityBtn: HTMLElement): void => {
    toggleVisibilityBtn.addEventListener("click", () => {
      this.hidden = !this.hidden

      this.targetForVisiblity.forEach(target => {
        target.classList.toggle("is-hidden", this.hidden)
        // If the callback is defined, then call it.
        if (this.onToggleCallback) {
          // Calls the callback passing the necessary arguments to it.
          this.onToggleCallback(toggleVisibilityBtn, target, this.hidden)
        }
      })
    })
  }
}
