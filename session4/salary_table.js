let salaryTable = [
  {
    name: "Đức",
    salary: 50,
    hours: 5,
    days: 24,
  },
  {
    name: "Hùng",
    salary: 70,
    hours: 4,
    days: 27,
  },
  {
    name: "Kiên",
    salary: 80,
    hours: 7,
    days: 20,
  }
];

let totalSalary = 0;

salaryTable.forEach((person, index) => {
  let monthSalary = person.salary * person.hours * person.days;
  console.log(`Lương tháng của ${person.name} là ${monthSalary}`);
  // totalSalary = totalSalary + monthSalary;
  totalSalary += monthSalary;
})

console.log(`Tổng lương của cả 3 người là ${totalSalary}`);