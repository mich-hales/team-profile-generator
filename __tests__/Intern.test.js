const Intern = require('../lib/Intern');

test('Creates a new Intern', () => {
    const employee = new Intern('Jane Doe', 123, 'janedoe@fakemail.com', 'UofU');

    expect(employee.name).toBe('Jane Doe');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
});

test('Checks methods for Intern', () => {
    const employee = new Intern('Jane Doe', 123, 'janedoe@fakemail.com', 'UofU');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe('Intern');
});