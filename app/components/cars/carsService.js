import Car from '../../models/car.js'
//private
let apiCars = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/cars'
})



let _state = {
  cars: [],

}


let _subscribers = {
  cars: []
}

function setState(prop, val) {
  _state[prop] = val
  _subscribers[prop].forEach(fn => fn())
}


export default class Cars {
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Cars() {
    return _state.cars.map(j => new Car(j))
  }

  addCar(data) {
    // let car = new Car(data)
    apiCars.post('', data).then(res => {
      this.getApiCars()
    })
  }

  getApiCars() {
    apiCars.get().then(res => {
      let data = res.data.data.map(p => new Car(p))
      setState('cars', data)

    })
  }

  deleteCar(id) {
    apiCars.delete(id).then(res => {
      this.getApiCars()
    })
  }

}