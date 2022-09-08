import { generateId } from "../Utils/generateId.js";


export class Source {
  /**
   * 
   * @param {{id: string, name: string, price: string, budgetId: string}} data 
   */
  constructor(data) {
    this.id = data.id || generateId();
    this.name = data.name;
    this.price = data.price;
    this.budgetId = data.budgetId;
  }

  get Template() {
    console.log("Template is templating")
    return/*html*/`
      <li class="d-flex justify-content-between list-group-item">
        <span>${this.name}</span>
        <span>$${this.price}</span>
      </li>
    `
  }
}