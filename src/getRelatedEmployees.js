const { employees } = require('../data/zoo_data');

const isManager = (paramId) => employees
  .some((emplyee) => emplyee.managers.find((manager) => manager === paramId));

const getRelatedEmployees = (id) => {
  if (!isManager(id)) throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  return employees.filter(({ managers }) => managers
    .some((manager) => manager === id))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
};

module.exports = { isManager, getRelatedEmployees };

// const isManager = (id) => {
//   let myManager = false;
//   employees.forEach((employee) => {
//     if (employee.managers.some((manager) => manager === id)) myManager = true;
//   });
//   return myManager;
// };
// const getRelatedEmployees = (id) => {
//     if (!isManager(id)) throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
//     return employees.reduce((acc, employee) => {
//       if (employee.managers.some((manager) => id === manager)) {
//         acc.push(`${employee.firstName} ${employee.lastName}`);
//       }
//       return acc;
//     }, []);
//   }
