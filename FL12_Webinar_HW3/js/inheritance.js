class Employee {
    static _EMPLOYEES = [];

    constructor(emp) {
        this.id = emp.id;
        this.firstName = emp.firstName;
        this.lastName = emp.lastName;
        this.birthday = emp.birthday;
        this.salary = emp.salary;
        this.position = emp.position;
        this.department = emp.department;
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
        this.department = newDepartment;
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
        
        if (benefits.department) {
            this.changeDepartment(benefits.department);
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
        
        if (punishment.department) {
            this.changeDepartment(punishment.department);
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
            if (Employee.EMPLOYEES[i].department === this.department && Employee.EMPLOYEES[i].position !== 'manager') {
                result.push(Employee.EMPLOYEES[i]);
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

// --------- task 3 --------------------------------------

const promoter = {
    promote(id, benefits) {
        this.managedEmployees.find((empl) => empl.id === id).getPromoted(benefits);
    }
}

const demoter = {
    demote(id, punishment) {
        this.managedEmployees.find((empl) => empl.id === id).getDemoted(punishment);
    }
}

function ManagerPro(manager, ...args) {
    return Object.assign(manager, ...args);
}

// -------------------------------------------------------

const salesManager = new SalesManager({
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    birthday: '10/04/1994',
    salary: 5000
});

const hrManager = new HRManager({
    id: 2,
    firstName: 'Bob',
    lastName: 'Doe',
    birthday: '21/09/1991',
    salary: 6000
});

const blueCollarWorkerOne = new BlueCollarWorker({
    id: 3,
    firstName: 'Mary',
    lastName: 'Doe',
    birthday: '16/08/1985',
    salary: 4000,
    position: 'office worker',
    department: 'sales'
});

const blueCollarWorkerTwo = new BlueCollarWorker({
    id: 4,
    firstName: 'Jane',
    lastName: 'Doe',
    birthday: '11/07/1986',
    salary: 4000,
    position: 'office worker',
    department: 'hr'
});