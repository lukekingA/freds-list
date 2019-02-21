import House from '../../models/house.js'
//private
let apiHouses = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/houses'
})



let _state = {
  houses: [],

}


let _subscribers = {
  houses: []
}

function setState(prop, val) {
  _state[prop] = val
  _subscribers[prop].forEach(fn => fn())
}


export default class Houses {
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get House() {
    return _state.houses.map(j => new House(j))
  }

  addHouse(data) {
    apiHouses.post('', data).then(res => {

      this.getApiHouses()
    })
  }

  getApiHouses() {
    apiHouses.get().then(res => {
      let data = res.data.data.map(p => new House(p))
      setState('houses', data)

    })
  }

  deleteHouse(id) {
    apiHouses.delete(id).then(res => {
      this.getApiHouses()
    })
  }

  updateDesc(data) {
    apiHouses.put(data._id, data).then(res => {
      this.getApiHouses()
    })
  }

}