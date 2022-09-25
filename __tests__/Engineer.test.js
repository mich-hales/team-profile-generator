const Engineer = require('../lib/Engineer');

test('Creates a new Engineer', () => {
    const employee = new Engineer('Jane Doe', 123, 'janedoe@fakemail.com', 'jane-doe');

    expect(employee.name).toBe('Jane Doe');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
});

test('Checks methods for Engineer', () => {
    const employee = new Engineer('Jane Doe', 123, 'janedoe@fakemail.com', 'jane-doe');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getGithub()).toBe(employee.github);
    expect(employee.getRole()).toBe('Engineer');
});

