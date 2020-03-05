import { createConsumer, Channel } from "@rails/actioncable"

interface SoldOutConcertSubscriber {
  onSoldOutConcertChange: () => void
}

export default class SoldOutConcertSource {
  private static instance: SoldOutConcertSource

  soldOutConcertIDs: number[]
  subscribers: SoldOutConcertSubscriber[]
  started: boolean
  channel: Channel

  static getInstance(): SoldOutConcertSource {
    if (!SoldOutConcertSource.instance) {
      SoldOutConcertSource.instance = new SoldOutConcertSource()
      SoldOutConcertSource.instance.start()
    }
    return SoldOutConcertSource.instance
  }

  private constructor() {
    this.soldOutConcertIDs = []
    this.subscribers = []
    this.started = false
  }

  start(): void {
    if (this.started) {
      return
    }
    this.started = true
    this.channel = this.createChannel(this)
  }

  createChannel(source: SoldOutConcertSource): Channel {
    return createConsumer().subscriptions.create("ScheduleChannel", {
      received({ soldOutConcertIds }) {
        source.soldOutConcertIDs = soldOutConcertIds
        source.subscribers.forEach(subscriber =>
          subscriber.onSoldOutConcertChange()
        )
      },
    })
  }

  addSubscriber(subscriber: SoldOutConcertSubscriber): void {
    this.subscribers.push(subscriber)
  }
}
