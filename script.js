// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

const collectEmployees = function () {
  let firstName = prompt("Enter employee's first name:")
  let lastName = prompt("Enter employee's last name:")
  let salary = prompt("Enter employee's salary:")
  if (isNaN(salary)) {return "0"}
  return { firstName, lastName, salary }
}
  
let employeesArray = []
console.log(employeesArray)

let cont = true
while (cont === true) {
  let newEmployee = collectEmployees()
  // if (collectEmployees(firstName) === null) break;
  // if (collectEmployees(lastName) === null) break;
  // if (collectEmployees(salary) === null) break;
  
  employeesArray.push(newEmployee)
  cont = confirm('Do you want to add another employee?')
} 

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // let employee = collectEmployees()
  let sumSalary = 
  let n = employeesArray.length
  let avgS = sumSalary/n
    console.log(`The average employee salary among our ${n} employee(s) is ${avgS}.`)
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  let e = employeesArray.length
  let r = Math.floor(Math.random() * e)
  let randomEmployee = employeesArray[r].values()
  console.log(randomEmployee)

  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
