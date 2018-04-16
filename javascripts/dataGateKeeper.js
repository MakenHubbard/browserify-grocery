const loadDepartments = require('./departments');
const loadItems = require('./items');
const departmentDom = require('./departmentDom');
const data = require('./data');

const whenItemsLoad = function () {
  const itemsData = JSON.parse(this.responseText).items;
  console.log('itemsData', itemsData);
};

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
  loadItems(whenItemsLoad, wrong);
};

module.exports = {
  initializer,
};
