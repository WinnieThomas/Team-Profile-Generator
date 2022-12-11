const Employee = require('../lib/Employee');

describe ("Employee",() =>{
    describe ("Initialization",() => {
      it("test the constructor",() =>{
        
        const id =123;
        const name = "John";
        const email = "test@example.com";
        const Role = "Employee";

        const Obj = new Employee(id, name, email);

        expect(Obj.id).toEqual(id);
        expect(Obj.name).toEqual(name);
        expect(Obj.email).toEqual(email);

        //check whether the code returns expected values

       expect(Obj.getId()).toEqual(id);
        expect(Obj.getName()).toEqual(name);
        expect(Obj.getEmail()).toEqual(email);
        expect(Obj.getRole()).toEqual(Role);

      });
    });
});