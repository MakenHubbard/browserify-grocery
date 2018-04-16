let departments = [];
let items = [];

const getDepartmentsLoad = function () {
  return departments;
};

const setDepartments = (departmentsArray) => {
  departments = departmentsArray;
};

const setItems = (itemsArray) => {
  items = itemsArray;
};

const getItems = () => {
  return items;
};

module.exports = {
  getDepartmentsLoad,
  setDepartments,
  setItems,
  getItems,
};
