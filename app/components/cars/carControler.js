import CarService from "./carsService.js"

let _cs = new CarService()

function draw() {
  let cars = _cs.Cars
  let template = ''
  cars.forEach(car => {
    template += car.getTemplate()
  })
  document.getElementById('available-items').innerHTML = template
  document.querySelector('#available-form').innerHTML = `
  <form class="input-group" onsubmit="app.controllers.carController.addCar(event)">
          <input type="text" name="make" placeholder=" make">
           <input type="text" name="model" placeholder=" model">
          <input type="number" name="price" placeholder="price">
          <input type="number" name="year" placeholder="year">
          <input type="text" name="description" placeholder="description">
          <input type="url" name="imgUrl" placeholder="url">
          <button type="submit">Submit</button>
        </form>`
}

//Public
export default class CarControler {
  constructor() {
    _cs.addSubscriber('cars', draw)
    _cs.getApiCars()
  }

  deleteCar(id) {
    _cs.deleteCar(id)
  }

  addCar(e) {
    console.log('hit addCar controller')
    e.preventDefault()
    let form = e.target
    let rawData = {
      model: form.make.value,
      make: form.make.value,
      price: form.price.value,
      year: form.year.value,
      imgUrl: form.imgUrl.value,
      description: form.description.value
    }
    _cs.addCar(rawData)
    form.reset()
  }

  getCars() {
    _cs.getApiCars()
  }
}