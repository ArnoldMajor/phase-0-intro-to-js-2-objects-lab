const employee = {};

employee.name = 'Arnold';
employee.streetAddress = 'Sinza';

console.log (employee);

function updateEmployeeWithKeyAndValue (employee, key, value){
    let newEmployee;
    newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

console.log (updateEmployeeWithKeyAndValue(employee, 'Age', '30'));

function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.name = 'Sam';
    employee.streetAddress = '12 Broadway'
    return employee;
}

console.log (destructivelyUpdateEmployeeWithKeyAndValue());

function deleteFromEmployeeByKey (employee, key){
    let newEmployee
    newEmployee = {...employee};
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}