import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInnerDropdownLableComponent } from './input-inner-dropdown-lable.component';

describe('InputInnerDropdownLableComponent', () => {
  let component: InputInnerDropdownLableComponent;
  let fixture: ComponentFixture<InputInnerDropdownLableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputInnerDropdownLableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputInnerDropdownLableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
