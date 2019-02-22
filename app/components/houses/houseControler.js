import HouseService from "./housesService.js"

let _hs = new HouseService()

function draw() {
  let houses = _hs.House
  let template = ''
  houses.forEach(house => template += house.getTemplate())
  document.getElementById('available-items').innerHTML = template

  document.querySelector('#available-form').innerHTML = `
  <form onsubmit="app.controllers.houseController.addHouse(event)">
          <input class="mr-1 my-1 rounded" type="number" name="year" placeholder=" year">
          <input class="mr-1 my-1 rounded" type="number" name="price" placeholder="price">
          <input class="mr-1 my-1 rounded" type="number" name="levels" placeholder="levels">
          <input class="mr-1 my-1 rounded" type="number" name="bedrooms" placeholder="bedrooms">
          <input class="mr-1 my-1 rounded" type="number" name="bathrooms" placeholder="bathrooms">
          <input class="mr-1 my-1 rounded" type="text" name="description" placeholder="description">
          <input class="mr-1 my-1 rounded" type="url" name="imgUrl" placeholder="url">
          <button class="btn btn-dark btn-sm text-light my-1" type="submit">Submit</button>
        </form>`
}

//Public

export default class HouseControler {
  constructor() {
    _hs.addSubscriber('houses', draw)

  }

  showForm(id) {
    document.getElementById(id).hidden = false
  }

  deleteHouse(id) {
    _hs.deleteHouse(id)
  }
  addHouse(e) {
    e.preventDefault()
    let form = e.target
    let rawData = {
      price: form.price.value,
      year: form.year.value,
      levels: form.levels.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      imgUrl: form.imgUrl.value,
      description: form.description.value
    }
    _hs.addHouse(rawData)
    form.reset()
  }

  getHouses() {
    _hs.getApiHouses()
  }

  updateDesc(e) {
    e.preventDefault()
    let target = _hs.House.filter(c => c._id == e.target.id)[0]
    target.description = e.target.description.value
    _hs.updateDesc(target)
  }

}