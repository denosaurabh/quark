import { EventDispatcher } from 'eventdispatcher.js'

class ReSpawn extends EventDispatcher {
  start() {
    this.dispatchEvent({ type: 'start', message: 'vroom vroom!' })
  }
}

// Using events with the custom object

const respawnEvent = new ReSpawn()

export default respawnEvent



