var employees =[];
// class Employee{
//  constructor(name, title, salary, status){
//  this.name = name;
//  this.title = title;
//  this.salary = salary;
//  this.status = status || "Full Time";
//   }
//  printEmployeeForm(){
//  console.log(this);
//   }
// }
function Employee(name, title, salary, status){
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status || "Full Time";
    this.printEmployeeForm = function(){
    console.log(this);
     };
   }

employees.push(new Employee("Bob","Instructor","$3000/hour"));
employees.push(new Employee("Jeff","Programmer","$20000/hour","Part-Time"));
employees.push(new Employee("Matt","Space Cowboy","$30/week"));

for(var employee of employees){
 employee.printEmployeeForm();
}