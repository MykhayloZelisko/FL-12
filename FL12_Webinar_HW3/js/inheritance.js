class Employee {
    static _EMPLOYEES = [];

    constructor(emp) {
        this.id = emp.id;
        this.firstName = emp.firstName;
        this.lastName = emp.lastName;
        this.birthday = emp.birthday;
        this.salary = emp.salary;
        this.position = emp.position;
        this.departament = emp.departament;
        Employee._EMPLOYEES.push(this);
    }

    get age() {
        const today = new Date();
        const birthday = new Date(this.birthday);
        let years = today.getFullYear() - birthday.getFullYear();
        let months = today.getMonth() - birthday.getMonth();
        let days = today.getDate() - birthday.getDate();
        if (months > 0 || months === 0 && days >= 0) {
            return years
        } else {
            return --years
        }
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    changeDepartment(newDepartment) {
        this.departament = newDepartment;
    }

    changePosition(newPosition) {
        this.position = newPosition;
    }

    changeSalary(newSalary) {
        this.salary = newSalary;
    }

    getPromoted(benefits) {
        if (benefits.salary) {
            this.changeSalary(benefits.salary);
        }
            
        if (benefits.position) {
            this.changePosition(benefits.position);
        }
        
        if (benefits.departament) {
            this.changeDepartment(benefits.departament);
        }

        console.log('Yoohoo!');
    }

    getDemoted(punishment) {
        if (punishment.salary) {
            this.changeSalary(punishment.salary);
        }
            
        if (punishment.position) {
            this.changePosition(punishment.position);
        }
        
        if (punishment.departament) {
            this.changeDepartment(punishment.departament);
        }

        console.log('Damn!');
    }

    static get EMPLOYEES() {
        return Employee._EMPLOYEES
    }

    qiut() {
        Employee.EMPLOYEES.splice(Employee.EMPLOYEES.indexOf(this), 1);
    }

    retire() {
        console.log('It was such a pleasure to work with you!');
        this.qiut();
    }

    getFired() {
        console.log('Not a big deal!');
        this.quit();
    }
}

class Manager extends Employee {
    constructor(emp) {
        super(emp);
        this.changePosition('manager');
    }

    get managedEmployees() {
        let result = [];
        for (let i = 0; i < Employee.EMPLOYEES.length; i++) {
            if (Employee.EMPLOYEES[i].departament = this.departament) {
                result.push.Employee.EMPLOYEES[i];
            }
        }

        return result;
    }
}

class BlueCollarWorker extends Employee {}

class HRManager extends Manager {
    constructor (emp) {
        super(emp);
        this.changeDepartment('hr');
    }
}

class SalesManager extends Manager {
    constructor (emp) {
        super(emp);
        this.changeDepartment('sales');
    }
}