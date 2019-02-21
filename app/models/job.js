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
          <p>${this.hours}/ day -- ${this.rate}/hr</p>
          <button onclick=" app.controllers.jobController.deleteJob('${this._id}')">delete</button>
        </div>
      </div>`
  }
}