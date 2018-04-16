let departments = [];
// let items = [];

const getDepartmentsLoad = function () {
  return departments;
};

const setDepartments = (departmentsArray) => {
  departments = departmentsArray;
};

module.exports = {
  getDepartmentsLoad,
  setDepartments,
};
