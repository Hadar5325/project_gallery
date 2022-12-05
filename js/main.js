'use strict'

function onInitPage() {
  console.log('Starting up');
  renderProtfolio()
  renderModal()
}

function renderProtfolio() {
  var projects = getProjects()
  console.log(projects)
  var elRow = document.querySelector('.container-rows')

  var strHTML = projects.map(protfo => `
    <div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${protfo.id}">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="${protfo.url}" alt="${protfo.title}">
    </a>
    <div class="portfolio-caption">
      <h4>${protfo.title}</h4>
      <p class="text-muted">${protfo.desc}</p>
    </div>
  </div>
    `)
  elRow.innerHTML = strHTML.join("")
  var elRow = document.querySelector('.container-rows')
}

function renderModal() {
  var elModal = document.querySelector('.total-modals')

  var modalProjects = gProjects.map(project => `

<div class="portfolio-modal modal fade" id="portfolioModal${project.id}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row modal-row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${project.name}</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" src="${project.url}" alt="${project.title}">
                <p>${project.desc}</p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `)
elModal.innerHTML = modalProjects.join("")

}