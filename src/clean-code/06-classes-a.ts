(() => {

    // NO APLICANDO EL PRINCIPIO DE RESPONSABILIDAD UNICA
    type Gender = 'M'|'F'
class Person {

    // Forma Larga
    // public name:string;
    // public gender: Gender;
    // public birthdate: Date;

    // constructor(name:string,gender:Gender,birthdate:Date){
    //     this.name = name;
    //     this.gender = gender;
    //     this.birthdate = birthdate;
    // }
    constructor(public name:string,
                public gender:Gender,
                public birthdate:Date,){}
}

class User extends Person{
    public lastAccess: Date; 
    constructor(public email:string, 
                public role:string, 
                name:string,
                gender:Gender,
                birthdate:Date){
        super(name,gender,birthdate)
        this.lastAccess = new Date();
    }
    checkCredentials(){
        return true;
    }
}

class UserSettings extends User {
    constructor(
        public workingDirectory: string,
        public lastOpenFolder: string,
        email:string,
        role:string,
        name:string,
        gender:Gender,
        birthdate:Date, 
        ){
            super(email,role,name,gender,birthdate);
        }
}

const userSetting = new UserSettings(
    '/usr/home',
    '/home/',
    'srtouzet@hotmail.com',
    'Admin',
    'Santiago',
    'M',
    new Date('2000-09-16'))
    console.log({userSetting, areCredentialsValid: userSetting.checkCredentials()})
})()
