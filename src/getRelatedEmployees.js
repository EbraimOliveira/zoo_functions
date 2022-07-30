const data = require('../data/zoo_data');

const { employees } = data; // === data.employess (só funciona se a variável for extraida de um objeto).
// verificar se é gerente.
// retorna true||false
const isManager = (id) => {
  let myManager = false;
  employees.forEach((employee) => {
    if (employee.managers.some((manager) => manager === id)) myManager = true;
  });
  return myManager;
};
console.log(isManager());
function getRelatedEmployees(id) {
  // isManager === true || false
  if (!isManager(id)) throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  return employees.reduce((acc, employee) => {
    if (employee.managers.some((manager) => id === manager)) {
      acc.push(`${employee.firstName} ${employee.lastName}`);
    }
    return acc;
  }, []);
}

module.exports = { isManager, getRelatedEmployees };
