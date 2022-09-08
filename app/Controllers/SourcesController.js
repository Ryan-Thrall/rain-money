import { sourcesService } from "../Services/sourcesService.js";
import { getFormData } from "../Utils/FormHandler.js";


export class SourcesController {

  constructor() {

  }

  createSource(id) {
    console.log("creating source")
    try {
      // @ts-ignore
      window.event.preventDefault();

      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)
      // @ts-ignore
      formData.budgetId = id
      // @ts-ignore
      console.log(formData.budgetId)

      sourcesService.createSource(formData)
    } catch (error) {
      console.error('[CREATE_SOURCE]', error);
    }
  }
}