const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

const speciesList = (param) => {
  const responsibleForList = param.responsibleFor;
  const bixoFiltrado = species.filter((specieName) => responsibleForList.includes(specieName.id));
  return bixoFiltrado.map((bixo) => bixo.name);
};

const locationsList = (param) => {
  const responsibleForList = param.responsibleFor;
  const bixoFiltrado = species.filter((specieName) => responsibleForList.includes(specieName.id));
  return bixoFiltrado.map((bixo) => bixo.location);
};
const employeeReturnObject = (param) => ({
  id: param.id,
  fullName: `${param.firstName} ${param.lastName}`,
  species: speciesList(param),
  locations: locationsList(param),
});

const allEmployees = () =>
  employees.map((employee) => employeeReturnObject(employee));

const getEmployeesCoverage = (param) => {
  if (!param) {
    return allEmployees();
  }
  const employeeObject = employees.find((emplyee) => emplyee.id === Object.values(param)[0]
    || emplyee.firstName === Object.values(param)[0]
    || emplyee.lastName === Object.values(param)[0]);
  if (employeeObject) {
    return employeeReturnObject(employeeObject);
  }
  throw new Error('Informações inválidas');
};

console.log(getEmployeesCoverage({ name: 'Spry' }));

module.exports = getEmployeesCoverage;
