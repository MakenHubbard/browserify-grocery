const loadDepartments = require('./departments');
const departmentDom = require('./departmentDom');
const data = require('./data');

const whenDepartmentsLoad = function () {
  const departmentsData = JSON.parse(this.responseText).departments;
  data.setDepartments(departmentsData);
  departmentDom(departmentsData);
};

const wrong = function () {
  console.error('something went wrong');
};

const initializer = () => {
  loadDepartments(whenDepartmentsLoad, wrong);
};

module.exports = {
  initializer,
};
