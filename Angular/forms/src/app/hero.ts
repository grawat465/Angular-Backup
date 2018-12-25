export class Hero {

   

  constructor(
    public custId: number,
    public custName: string,
    public balance: string,
   
  ) { 
    
   }
    toString():String{
      return "ID"+this.custId+" | name "+this.custName;
    }
}
