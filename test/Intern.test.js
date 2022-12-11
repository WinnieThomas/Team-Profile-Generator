const Intern = require('../lib/Intern');

describe ("Intern",() =>{
    describe ("Initialization",() => {
      it("test the constructor",() =>{
        
        const id =123;
        const name = "John";
        const email = "test@example.com";
        const school = "Test school";
        const Role = "Intern";

        const Obj = new Intern(id, name, email,school);

        expect(Obj.id).toEqual(id);
        expect(Obj.name).toEqual(name);
        expect(Obj.email).toEqual(email);
        expect(Obj.school).toEqual(school);

        expect(Obj.getId()).toEqual(id);
        expect(Obj.getName()).toEqual(name);
        expect(Obj.getEmail()).toEqual(email);
        expect(Obj.getSchool()).toEqual(school);
        expect(Obj.getRole()).toEqual(Role);

      });
    });
});