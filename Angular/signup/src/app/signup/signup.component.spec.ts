import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule} from  '@angular/forms'
import { SignupComponent } from './signup.component';


describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ SignupComponent ]
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('from invalid when empty', () => {
    expect(component.registrationForm.valid).toBeFalsy();
  });

  it('username field validity', () => {
    let username = component.registrationForm.controls['userName']; 
    expect(username.valid).toBeFalsy(); 
  });


  it('username field validity', () => {
    let errors = {};
    let username= component.registrationForm.controls['userName'];
    errors = username.errors || {};
    expect(errors['required']).toBeTruthy(); 


    username.setValue("test");
errors = username.errors || {};
expect(errors['pattern']).toBeTruthy();

  });

  });
