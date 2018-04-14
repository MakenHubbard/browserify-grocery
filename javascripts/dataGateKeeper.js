const loadDepartments = require('./departments');
const departmentDom = require('./departmentDom');

const whenDepartmentsLoad = function () {
  const data = JSON.parse(this.responseText).departments;
  departmentDom(data);
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
