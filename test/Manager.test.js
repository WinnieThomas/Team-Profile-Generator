const Manager = require('../lib/Manager');

describe ("Manager",() =>{
    describe ("Initialization",() => {
      it("test the constructor",() =>{
        
        const id =123;
        const name = "John";
        const email = "test@example.com";
        const phone = "991234567891";
        const Role = "Manger";

        const Obj = new Manager(id, name, email,phone);

        expect(Obj.id).toEqual(id);
        expect(Obj.name).toEqual(name);
        expect(Obj.email).toEqual(email);
        expect(Obj.phone).toEqual(phone);

        expect(Obj.getId()).toEqual(id);
        expect(Obj.getName()).toEqual(name);
        expect(Obj.getEmail()).toEqual(email);
        expect(Obj.getOfficenum()).toEqual(phone);
        expect(Obj.getRole()).toEqual(Role);

      });
    });
});