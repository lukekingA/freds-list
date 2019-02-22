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
          <input class="mr-1 my-1 rounded" type="text" name="make" placeholder=" make">
          <input class="mr-1 my-1 rounded" type="text" name="model" placeholder=" model">
          <input class="mr-1 my-1 rounded" type="number" name="price" placeholder="price">
          <input class="mr-1 my-1 rounded" type="number" name="year" placeholder="year">
          <input class="mr-1 my-1 rounded" type="text" name="description" placeholder="description">
          <input class="mr-1 my-1 rounded" type="url" name="imgUrl" placeholder="url">
          <button class="btn btn-dark btn-sm text-light my-1" type="submit">Submit</button>
        </form>`
}

//Public
export default class CarControler {
  constructor() {
    _cs.addSubscriber('cars', draw)
    _cs.getApiCars()
  }

  showForm(id) {
    document.getElementById(id).hidden = false
  }

  deleteCar(id) {
    _cs.deleteCar(id)
  }

  addCar(e) {
    console.log('hit addCar controller')
    e.preventDefault()
    let form = e.target
    let rawData = {
      make: form.model.value,
      model: form.make.value,
      price: parseInt(form.price.value),
      year: parseInt(form.year.value),
      imgUrl: form.imgUrl.value,
      description: form.description.value
    }
    _cs.addCar(rawData)
    form.reset()
  }

  updateDesc(e) {
    e.preventDefault()
    let target = _cs.Cars.filter(c => c._id == e.target.id)[0]
    target.description = e.target.description.value
    _cs.updateDesc(target)
  }

  getCars() {
    _cs.getApiCars()
  }
}