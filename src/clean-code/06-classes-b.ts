(() => {

    type Gender = 'M'|'F'
   interface PersonProperty{
       name :string;
       gender: Gender;
       birthdate: Date;
   }
   class Person {

    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({name,gender,birthdate}:PersonProperty){
        this.name = name,
        this.gender = gender,
        this.birthdate = birthdate
    }
}


interface UserInterface {
    email:string,
    role:string,
    name:string,
    gender: Gender,
    birthdate:Date,   
}




class User extends Person{
    public email: string;
    public role: string;
    public lastAccess: Date; 
    constructor({email,role,name,gender,birthdate}:UserInterface){
        super({name,gender,birthdate})
        this.email = email,
        this.role = role,
        this.lastAccess = new Date();
    }
    checkCredentials(){
        return true;
    }
}


interface UserSettingsProps{
    workingDirectory: string,
    lastOpenFolder: string,
    email:string,
    role:string,
    name:string,
    gender:Gender,
    birthdate:Date, 
}

class UserSettings extends User {
    public workingDirectory:string;
    public lastOpenFolder:string;
    constructor(
        {
        workingDirectory,
        lastOpenFolder,
        email,
        role,
        name,
        gender,
        birthdate,
         }:UserSettingsProps 
        ){
            super({email,role,name,gender,birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
}

const userSetting = new UserSettings(
    {workingDirectory:'/usr/home',
    lastOpenFolder:'/home/',
    email:'srtouzet@hotmail.com',
    role:'Admin',
    name:'Santiago',
    gender:'M',
    birthdate: new Date('2000-09-16')})
    console.log({userSetting, areCredentialsValid: userSetting.checkCredentials()})
})()
