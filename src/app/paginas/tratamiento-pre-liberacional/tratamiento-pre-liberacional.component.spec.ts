import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoPreLiberacionalComponent } from './tratamiento-pre-liberacional.component';

describe('TratamientoPreLiberacionalComponent', () => {
  let component: TratamientoPreLiberacionalComponent;
  let fixture: ComponentFixture<TratamientoPreLiberacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TratamientoPreLiberacionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamientoPreLiberacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
