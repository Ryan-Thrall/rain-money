import { appState } from "../AppState.js";
import { Budget } from "../Models/Budget.js";


class BudgetsService {
  addSaved(price) {
    throw new Error("Method not implemented.");
  }
  createBudget(data) {
    appState.budgets = [new Budget(data), ...appState.budgets]
  }

  // addSaved(saved, id) {

  // }

}


export const budgetsService = new BudgetsService();