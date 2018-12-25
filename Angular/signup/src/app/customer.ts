export class Customer {


   
    Username: string;
   Password: string;
   CPassword:string;
   State:string;
   City:string;
   Postal:number;
   Street:string;
   Gender:string;

   constructor(Username:string,Password:string,CPassword:string,State:string,City:string,Postal:number,Street:string
    ,Gender:string){
        this.Username=Username;
        this.Password=Password;
        this.CPassword=CPassword;
        this.State=State;
        this.City=City;
        this.Postal=Postal;
        this.Street=Street;
        this.Gender=Gender;


    }

  }

