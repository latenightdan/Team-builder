const Engineer = require("../lib/Engineer");

test('creates an engineer object', () =>{
    const engineer = new Engineer('ExBob', 'fred@bent', 5, 666);

    expect(engineer.name).toBe('ExBob');
    
expect(engineer.name).toEqual(expect.any(String));
expect(engineer.email).toBe('fred@bent');
expect(engineer.email).toEqual(expect.any(String));
engineer.id += 5;
expect(engineer.id).toEqual(expect.any(Number));
console.log(engineer)

});


test('check the gets', () => {
    const engineer = new Engineer('frank', 'feeler@feel', 12, 'engineer-github');
    
    expect(engineer.getName()).toEqual('frank');
    
    
    
    expect(engineer.getId()).toEqual(expect.any(Number));
    
    expect(engineer.getEmail()).toEqual('feeler@feel');
    expect(engineer.getRole()).toEqual('Engineer');
    expect(engineer.getGit()).toEqual(expect.any(String));
    
    console.log(engineer)
    });