import {odd_even} from  "./compute";

//describe the name of function

describe("odd_even", () =>{

    it("should return false if number is odd" ,()=>{
        const result= odd_even(23);

        //assert
        expect(result).toBe(false);

    });

    
    it("should return true if number is even" ,()=>{
        const result= odd_even(26);

        //assert
        expect(result).toBe(true);
    });
});