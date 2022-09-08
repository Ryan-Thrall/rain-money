import { appState } from "../AppState.js";
import { Source } from "../Models/Source.js";
import { budgetsService } from "./BudgetsService.js";


class SourcesService {
  createSource(data) {
    console.log("data: ", data.price)
    appState.sources = [new Source(data), ...appState.sources]
    console.log("creating source", appState.sources)
    // budgetsService.addSaved(data.price, data.budgetId)
  }

}

export const sourcesService = new SourcesService();