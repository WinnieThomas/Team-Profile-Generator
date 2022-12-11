const Employee = require('./Employee');

class Manager extends Employee{

    constructor(id,name,email,phone){
    super(id,name,email);
    this.phone =phone;
}

getOfficenum(){
    return this.phone;
}

getRole(){
    return "Manger";
}

}

module.exports = Manager;