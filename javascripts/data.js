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

const getItemsByDepartment = (departmentId) => {
  const selectedItems = [];
  items.forEach ((item) => {
    if (item.departmentId === departmentId) {
      selectedItems.push(item);
    };
  });
  return selectedItems;
};

module.exports = {
  getDepartmentsLoad,
  setDepartments,
  setItems,
  getItems,
  getItemsByDepartment,
};
