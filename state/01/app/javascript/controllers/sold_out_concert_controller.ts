import { Controller } from "stimulus"
import SoldOutConcertSource from "../src/sold_out_concert_source"

export default class extends Controller {
  static targets = ["label"]
  static values = { id: Number }

  labelTarget: HTMLElement
  idValue: number

  connect() {
    this.updateLabel()
    SoldOutConcertSource.getInstance().addSubscriber(this)
  }

  isSoldOut(): boolean {
    const soldOutConcertIds = SoldOutConcertSource.getInstance()
      .soldOutConcertIDs
    return soldOutConcertIds.includes(this.idValue)
  }

  onSoldOutConcertChange(): void {
    this.updateLabel()
  }


  updateLabel(): void {
    const soldOut = this.isSoldOut()
    this.labelTarget.innerText = soldOut ? "Sold Out" : "On Sale"
  }
}
