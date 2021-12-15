import { Subject } from 'rxjs'

const subject = new Subject()

export const eventManager = {
  sendMessage: (message) => subject.next({ message }),
  clearMessages: () => subject.next(),
  onMessage: () => subject.asObservable(),
}
