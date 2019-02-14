import DataService from "./dataService.js"

let _ds = new DataService()

function draw() {
  let houses = _ds.House
  let template = ''
  houses.forEach(house => template += house.getTemplate())
  document.getElementById('available-houses').innerHTML = template
}

//Public

export default class HouseControler {
  constructor() {
    _ds.addSubscriber('houses', draw)
    draw()
  }

  deleteHouse(type, id) {
    _ds.deleteItem(type, id)
  }
}