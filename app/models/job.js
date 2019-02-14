let id = 0

export default class Job {
  constructor(data) {
    this.type = 'jobs';
    this.id = id;
    this.title = data.title;
    this.company = data.company;
    this.description = data.description || 'no description';
    id++
  }

  getTemplate() {
    return `
   <div class="card col-3">
        <div class="card-body">
          <h4 class="card-title">${this.title}</h4>
          <h5 class="card-title">${this.company}</h5>
          <p class="card-text">
            ${this.description}
          </p>
          <button onclick=" app.controlers.jobControler.deleteJob(${this.type},${this.id})">delete</button>
        </div>
      </div>`
  }
}