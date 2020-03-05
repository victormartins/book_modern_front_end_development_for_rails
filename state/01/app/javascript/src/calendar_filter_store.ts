export interface CalendarFilterSubscriber {
  calendarFilterChanged(store: CalendarFilterStore): void
}

export class CalendarFilterStore {
  private static instance: CalendarFilterStore

  static store(): CalendarFilterStore {
    if (!CalendarFilterStore.instance) {
      CalendarFilterStore.instance = new CalendarFilterStore()
    }
    return CalendarFilterStore.instance
  }

  filterStates: { [key: string]: boolean }
  subscribers: CalendarFilterSubscriber[]

  private constructor() {
    this.filterStates = {}
    this.subscribers = []
  }

  addSubscriber(subscriber: CalendarFilterSubscriber): void {
    this.subscribers.push(subscriber)
  }

  calendarFilterChanged() {
    this.subscribers.forEach(subscriber =>
      subscriber.calendarFilterChanged(this)
    )
  }

  addFilter(dateString: string): void {
    this.filterStates[dateString] = false
    this.calendarFilterChanged()
  }

  toggleDateStatus(dateString: string): void {
    if (!(dateString in this.filterStates)) {
      return
    }
    this.filterStates[dateString] = !this.filterStates[dateString]
    this.calendarFilterChanged()
  }

  clearAll(): void {
    for (const state in this.filterStates) {
      this.filterStates[state] = false
    }
    this.calendarFilterChanged()
  }
}
