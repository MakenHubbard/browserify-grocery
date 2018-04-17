let departments = [];
let items = [];
const cart = [];

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

const setCart = (itemId,numberToAdd) => {
  const itemPosition = items.map(function (item) {
    return item.id;
  }).indexOf(itemId);
  const newItem = items[itemPosition];
  newItem.purchaseNum = numberToAdd;
  console.log('newItem',newItem);
  cart.push(newItem);
};

module.exports = {
  getDepartmentsLoad,
  setDepartments,
  setItems,
  getItems,
  getItemsByDepartment,
  setCart,
};
