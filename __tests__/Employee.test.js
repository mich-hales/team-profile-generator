const Employee = require('../lib/Employee');

test('Generates a new employee', () => {
    const employee = new Employee('Jane Doe', 123, 'janedoe@fakemail.com');

    expect(employee.name).toBe('Jane Doe');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Checks all methods for Employee', () => {
    const employee = new Employee('Jane Doe', 123, 'janedoe@fakemail.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
});

