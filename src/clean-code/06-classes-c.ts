(() => {
// Aplicando el principio de responsabilidad Unica
// Prioriza la composición frente a la herencia!, a que se refiere esto? A menos de que sea necesario hay que tratar de evitar las extenciones porque añaden una capa de complejidad 
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


interface UserProps {
    email:string,
    role:string,   
}




class User {
    public email: string;
    public role: string;
    public lastAccess: Date; 
    constructor({email,role}:UserProps){
        this.email = email,
        this.role = role,
        this.lastAccess = new Date();
    }
    checkCredentials(){
        return true;
    }
}


interface SettingsProps{
    workingDirectory: string,
    lastOpenFolder: string,
}

class Settings{
    public workingDirectory:string;
    public lastOpenFolder:string;
    constructor(
        {
        workingDirectory,
        lastOpenFolder,
         }:SettingsProps 
        ){        
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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
// Esto va a ser una Clase que hara una composición de las demas clases
    class UserSetting{
        public person : Person;
        public User : User;
        public Setting : Settings;
        constructor({name,gender,birthdate,email,role,workingDirectory,lastOpenFolder}:UserSettingsProps){
            this.person = new Person({name,gender,birthdate});
            this.User = new User({email,role});
            this.Setting = new Settings({workingDirectory,lastOpenFolder})
        }
    }

const userSetting = new UserSetting(
    {workingDirectory:'/usr/home',
    lastOpenFolder:'/home/',
    email:'srtouzet@hotmail.com',
    role:'Admin',
    name:'Santiago',
    gender:'M',
    birthdate: new Date('2000-09-16')})
    console.log({userSetting})
})()
