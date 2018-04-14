let departments = [];

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
