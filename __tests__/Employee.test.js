const Employee = require('../lib/Employee');

test('creates an employee object', () =>{
const employeee = new Employee('manager', 'butt');

expect(employeee.name).toBe('manager');
expect(employeee.name).toEqual(expect.any(String));
expect(employeee.email).toBe('butt');
expect(employeee.email).toEqual(expect.any(String));
employeee.id += 1;
expect(employeee.id).toEqual(expect.any(Number));
console.log(employeee)
});