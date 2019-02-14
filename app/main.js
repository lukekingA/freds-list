import CarControler from "./components/carControler.js";
import HouseControler from "./components/houseControler.js";
import JobControler from "./components/jobControler.js";
import AddControler from "./components/addControler.js";







class App {
  constructor() {
    this.controlers = {
      carControler: new CarControler(),
      houseControler: new HouseControler(),
      jobControler: new JobControler(),
      addControler: new AddControler()
    }
  }
}

window.app = new App()