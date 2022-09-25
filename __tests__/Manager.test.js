const Manager = require('../lib/Manager');

test('Creates a new Manager', () => {
    const employee = new Manager('Jane Doe', 123, 'janedoe@fakemail.com', 123456);

    expect(employee.name).toBe('Jane Doe');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
});

test('Checks methods for Manager', () => {
    const employee = new Manager('Jane Doe', 123, 'janedoe@fakemail.com', 123456);

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getOfficeNumber()).toBe(employee.officeNumber);
    expect(employee.getRole()).toBe('Manager');
});