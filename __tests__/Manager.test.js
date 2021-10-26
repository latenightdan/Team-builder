const Manager = require("../lib/Manager");

test('creates manager object', () =>{
    const manager = new Manager('ExBob', 'fred@bent');

    expect(manager.name).toBe('ExBob');
    
expect(manager.name).toEqual(expect.any(String));
expect(manager.email).toBe('fred@bent');
expect(manager.email).toEqual(expect.any(String));
manager.id += 5;
expect(manager.id).toEqual(expect.any(Number));
console.log(manager)

});