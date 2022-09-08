import { appState } from "../AppState.js"
import { budgetsService } from "../Services/BudgetsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"


function _drawBudgets() {
  let template = ''
  appState.budgets.forEach(budget => template += budget.Template)
  setHTML('budgets', template)
}



export class BudgetsController {

  constructor() {

    _drawBudgets()

    appState.on("budgets", _drawBudgets)
    appState.on("sources", _drawBudgets)
  }

  createBudget() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)

      budgetsService.createBudget(formData)

    } catch (error) {
      console.error('[CREATE_ORDER]', error);
    }
    _drawBudgets()
  }

  togglePurchased(id) {
    let budget = appState.budgets.find(budget => budget.id == id)
    // @ts-ignore
    budget.purchased = !budget.purchased
    console.log(budget)
  }
}