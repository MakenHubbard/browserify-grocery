// print to dom function
const events = require('./events');
const outputSpot = document.getElementById('departments');

const domString = (departments) => {
  let strung = '';
  console.log('department', departments);
  departments.forEach((department) => {
    strung += `<div class="department col-md-3">
                <h3 class="hide department-title" data-department-id="${department.id}">${department.name}</h3>
                <img class="department-image" src="${department.img}">
              </div>`;
  });
  return strung;
};

const departmentDom = (department) => {
  outputSpot.innerHTML = domString(department);
  events.addDepartmentEvents();
};

module.exports = departmentDom;

// call domString function

// 2 rows of 4 - use bootstrap grid

// make a card with class of department

// each card should have image tag and h3 tag

// h3 tag should have class hide
