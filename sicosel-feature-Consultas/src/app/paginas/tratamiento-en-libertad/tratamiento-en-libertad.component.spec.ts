import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoEnLibertadComponent } from './tratamiento-en-libertad.component';

describe('TratamientoEnLibertadComponent', () => {
  let component: TratamientoEnLibertadComponent;
  let fixture: ComponentFixture<TratamientoEnLibertadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TratamientoEnLibertadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamientoEnLibertadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
