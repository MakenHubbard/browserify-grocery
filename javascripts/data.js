const loadDepartments = require('./departments');

const whenDepartmentsLoad = function () {
  const data = JSON.parse(this.responseText).departments;
  console.log('departments',data);
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
