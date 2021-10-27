const Employee = require('../lib/Employee');

test('creates an employee object', () =>{
const employeee = new Employee('manager', 'butt', 6, 'employee');

expect(employeee.name).toBe('manager');
expect(employeee.name).toEqual(expect.any(String));
expect(employeee.email).toBe('butt');
expect(employeee.email).toEqual(expect.any(String));
employeee.id += 1;
expect(employeee.id).toEqual(expect.any(Number));

});

test('check the gets', () => {
const employee = new Employee('dub', 'step', 12, 'lord');

expect(employee.getName()).toEqual('dub');



expect(employee.getId()).toEqual(expect.any(Number));

expect(employee.getEmail()).toEqual('step');
expect(employee.getRole()).toEqual('lord');

console.log(employee)
});