export default class Job {
  constructor(data) {
    //this.type = 'jobs';
    this._id = data._id;
    this.jobTitle = data.jobTitle;
    this.company = data.company;
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description || 'no description';
  }

  getTemplate() {
    return `
   <div class="card col-12 col-sm-4">
        <div class="card-body">
          <h4 class="card-title">${this.jobTitle}</h4>
          <h5 class="card-title">${this.company}</h5>
          <p class="card-text">
            ${this.description}
          </p>
          <p>${this.hours}hrs/day -- $${this.rate.toFixed(2)}/hr</p>
          <div class="d-flex justify-content-between">
          <button onclick=" app.controllers.jobController.deleteJob('${this._id}')">delete</button>
          <i class="fas fa-edit" onclick="app.controllers.jobController.showForm('${this._id}')"></i>
          <form hidden onsubmit="app.controller.jobController.updateDesc(event)" id="${this._id}">
            <input type="text" name="description" placeholder="New Description">
            <button class="btn btn-sm" type="submit">Submit</button>
          </form>
          </div>
        </div>
      </div>`
  }
}