import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployeeComponent } from './deployee.component';

describe('DeployeeComponent', () => {
  let component: DeployeeComponent;
  let fixture: ComponentFixture<DeployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
