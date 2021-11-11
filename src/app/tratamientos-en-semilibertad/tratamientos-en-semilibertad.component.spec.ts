import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientosEnSemilibertadComponent } from './tratamientos-en-semilibertad.component';

describe('TratamientosEnSemilibertadComponent', () => {
  let component: TratamientosEnSemilibertadComponent;
  let fixture: ComponentFixture<TratamientosEnSemilibertadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TratamientosEnSemilibertadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamientosEnSemilibertadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
