let id = 1


export default class Car {
  constructor(data) {
    this.type = 'cars';
    this.id = id;
    this.price = data.price;
    this.title = data.title;
    this.img = data.img;
    this.description = data.description;
    id++
  }
  getTemplate() {
    return `
   <div class="card col-3">
        <img class="card-img-top" src=${this.img} alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">${this.title}</h4>
          <p class="card-text">
            ${this.description} -- ${this.price}
          </p>
          <button onclick=" app.controlers.carControler.deleteCar(${this.type},${this.id})">delete</button>
        </div>
      </div>`
  }
}