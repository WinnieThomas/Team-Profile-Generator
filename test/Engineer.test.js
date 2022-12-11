const Engineer = require('../lib/Engineer');

describe ("Engineer",() =>{
    describe ("Initialization",() => {
      it("test the constructor",() =>{
        
        const id =123;
        const name = "John";
        const email = "test@example.com";
        const github = "John@github.com";
        const Role = "Engineer";

        const Obj = new Engineer(id, name, email,github);

        expect(Obj.id).toEqual(id);
        expect(Obj.name).toEqual(name);
        expect(Obj.email).toEqual(email);
        expect(Obj.github).toEqual(github);

        expect(Obj.getId()).toEqual(id);
        expect(Obj.getName()).toEqual(name);
        expect(Obj.getEmail()).toEqual(email);
        expect(Obj.getGithub()).toEqual(github);
        expect(Obj.getRole()).toEqual(Role);

      });
    });
});