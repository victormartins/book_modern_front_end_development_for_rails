import { Controller } from "stimulus"

interface GonData {
  sold_out_concert_ids: number[]
}

declare const gon: GonData

export default class extends Controller {
  static targets = ["label"]
  static values = { id: Number }

  labelTarget: HTMLElement
  idValue: number

  connect() {
    this.updateLabel()
  }

  isSoldOut(): boolean {
    return gon.sold_out_concert_ids.includes(this.idValue)
  }

  updateLabel(): void {
    this.labelTarget.innerText = this.isSoldOut() ? "Sold Out" : "On Sale"
  }
}
