const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee();
    expect(typeof employee).toBe('object');
});

test('Can set name in employee class', () => {
    const employee = new Employee('Dave');
    expect(employee.getName()).toBe('Dave');
});

test('Can set id in employee class', () => {
    const employee = new Employee('Dave', 2);
    expect(employee.getId()).toBe(2);
});

test('Can set email in employee class', () => {
    const employee = new Employee('Dave', 2, 'dave@dave.com');
    expect(employee.getEmail()).toBe('dave@dave.com');
});
