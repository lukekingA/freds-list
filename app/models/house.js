export default class House {
  constructor(data) {
    // this.type = 'houses';
    this._id = data._id
    this.price = data.price
    this.year = data.year
    this.levels = data.levels
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.imgUrl = data.imgUrl;
    this.description = data.description || 'no description';

  }

  getTemplate() {
    return `
   <div class="card col-12 col-sm-4">
        <img class="card-img-top" src=${this.imgUrl} alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">Built ${this.year} ${this.bedrooms}-beds ${this.bathrooms}-baths</h4>
          <p class="card-text">
            ${this.description} -- ${this.price.toFixed(2)}
          </p>
          <div class="d-flex justify-content-between">
          <button onclick=" app.controllers.houseController.deleteHouse('${this._id}')">Delete</button>
          <i class="fas fa-edit" onclick="app.controllers.houseController.showForm('${this._id}')"></i>
          <form hidden onsubmit="app.controllers.houseController.updateDesc(event)" id="${this._id}">
            <input type="text" name="description" placeholder="New Description">
            <button class="btn btn-sm" type="submit">Submit</button>
          </form>
          </div>
        </div>
      </div>`
  }
}