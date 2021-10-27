const Intern = require("../lib/Intern");

test('creates intern Object', () =>{
    const intern = new Intern('sparky', 'sparky@yellAtMeIfYouWant', 5, 'Bad School University');

    expect(intern.name).toBe('sparky');
    
expect(intern.name).toEqual(expect.any(String));
expect(intern.email).toBe('sparky@yellAtMeIfYouWant');
expect(intern.email).toEqual(expect.any(String));
intern.id += 5;
expect(intern.id).toEqual(expect.any(Number));
console.log(intern)
});

test('test the gets', () =>{
const intern = new Intern()
console.log(intern);

});

