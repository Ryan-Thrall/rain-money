import { Budget } from "./Models/Budget.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', Value)


  // budgets = loadState('budgets', Budget)
  /** @type {import('./Models/Budget').Budget[]} */
  budgets = [new Budget({
    name: "Tv", price: 50, purchased: false, saved: 0
  })]

  /** @type {import('./Models/Source').Source[]} */
  sources = []
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
