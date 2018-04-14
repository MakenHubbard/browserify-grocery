const loadDepartments = require('./departments');
const printToDom = require('./dom');

const whenDepartmentsLoad = function () {
  const data = JSON.parse(this.responseText).departments;
  printToDom(data);
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
