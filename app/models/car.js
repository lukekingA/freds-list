export default class Car {
  constructor(data) {
    //this.type = 'cars';
    this._id = data._id;
    this.make = data.make
    this.model = data.model
    this.price = data.price;
    this.year = data.year
    this.imgUrl = data.imgUrl;
    this.description = data.description;

  }
  getTemplate() {
    return `
   <div class="card col-12 col-sm-4">
        <img class="card-img-top" src=${this.imgUrl} alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">${this.year} ${this.make} ${this.model}</h4>
          <p class="card-text">
            ${this.description} -- ${this.price}
          </p>
          <button onclick=" app.controlers.carControler.deleteCar('${this._id}')">delete</button>
        </div>
      </div>`
  }
}