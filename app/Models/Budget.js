import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";



export class Budget {
  /** 
   * @param {{id?: string, name: string, price: number, purchased: boolean, saved: number}} data
  */
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name;
    this.price = data.price;
    this.purchased = data.purchased || false;
    this.saved = data.saved;
  }

  get Template() {
    return /*html*/`

  <div class="card shadow m-3">
    <div class="card-body p-5">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex">
          <input type="checkbox" onchange="app.budgetsController.togglePurchased('${this.id}')">
        </div>

        <div class="d-flex">
          <h2>Name: </h2>
          <h2>${this.name}</h2>
        </div>
        <div class="d-flex">
          <h4>Price:</h4>
          <h4> $${this.saved} of ${this.price}</h4>
        </div>
      </div>

      <ul>
        ${this.SourcesTemplates}
      </ul>
       
      
      <form onsubmit="app.sourcesController.createSource('${this.id}')">
        <div>
          <div class="d-flex">
            <input type="text" class="form-control" name="name" placeholder="Add Source">
            <label for="name"></label>
            <input type="number" class="form-control" name="price" placeholder="Amount">
            <label for="price"></label>
            <div>
              <button class="btn btn-outline-dark" type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>

    </div>
  </div>
    `
  }

  get SourcesTemplates() {
    let template = ''
    this.Sources.forEach(source => template += source.Template)
    return template
  }

  get Sources() {
    let source = appState.sources.filter(source => source.budgetId == this.id)
    return source
  }
}