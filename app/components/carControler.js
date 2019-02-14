import DataService from "./dataService.js"

let _ds = new DataService()

function draw() {
  let cars = _ds.Cars
  let template = ''
  cars.forEach(car => {
    template += car.getTemplate()
  })
  document.getElementById('available-cars').innerHTML = template
}

//Public
export default class CarControler {
  constructor() {
    _ds.addSubscriber('cars', draw)
    draw()
  }

  deleteCar(type, id) {
    _ds.deleteItem(type, id)
  }
}