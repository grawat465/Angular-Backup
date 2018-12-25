import { VoteComponent } from "./vote.component";
import { TestBed } from "@angular/core/testing";

describe("VoteComponent", () => {
  // Arrange
  let component: VoteComponent;

  // to ensure code isn't fragile, instantiate class before each call
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[VoteComponent]
    });
    component=TestBed.get(VoteComponent);
  });

  
    

  
  

  // clean up done in afterEach(() => {})

  it("Increment total vote count", () => {
    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it("Decrease total vote count", () => {
    // Act
    component.downVote();

    // Assert
    expect(component.totalVotes).toBe(-1);
  });
});
