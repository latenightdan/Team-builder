const Manager = require("../lib/Manager");

test('creates manager object', () =>{
    const manager = new Manager('ExBob', 'fred@bent', 5, 666);

    expect(manager.name).toBe('ExBob');
    
expect(manager.name).toEqual(expect.any(String));
expect(manager.email).toBe('fred@bent');
expect(manager.email).toEqual(expect.any(String));
manager.id += 5;
expect(manager.id).toEqual(expect.any(Number));
console.log(manager)

});


test('check the gets', () => {
    const manny = new Manager('frank', 'feeler@feel', 12, 20);
    
    expect(manny.getName()).toEqual('frank');
    
    
    
    expect(manny.getId()).toEqual(expect.any(Number));
    
    expect(manny.getEmail()).toEqual('feeler@feel');
    expect(manny.getRole()).toEqual('Manager');
    expect(manny.getOfficeNum()).toEqual(expect.any(Number));
    
    console.log(manny)
    });