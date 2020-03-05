import { Controller } from "stimulus"

export default class DayToggleController extends Controller {
  static classes = ["hidden"]
  static targets = ["thingToHide"]

  hiddenClass: string
  thingToHideTarget: HTMLElement

  toggle() {
    this.thingToHideTarget.classList.toggle(this.hiddenClass)
  }
}
