import { getCurrencies } from "./getCurrencies";

describe("getCurrencies", () => {
  it("Should return the currenies", () => {
    const result = getCurrencies();
     const curr=["USD", "KSH", "EUR", "IND","Sindia"];
    for(let i=0;i <result.length;i++)
    {
      expect(result).toContain(curr[i]);
    }
    
  });
});
