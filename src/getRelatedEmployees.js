const { employees } = require('../data/zoo_data');

const isManager = (id) => {
  let myManager = false;
  employees.forEach((employee) => {
    if (employee.managers.some((manager) => manager === id)) myManager = true;
  });
  return myManager;
};
const getRelatedEmployees = (id) => {

  if (!isManager(id)) throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  return employees.reduce((acc, employee) => {
    if (employee.managers.some((manager) => id === manager)) {
      acc.push(`${employee.firstName} ${employee.lastName}`);
    }
    return acc;
  }, []);
}

module.exports = { isManager, getRelatedEmployees };
