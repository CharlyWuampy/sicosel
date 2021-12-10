import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosPostalesComponent } from './servicios-postales.component';

describe('ServiciosPostalesComponent', () => {
  let component: ServiciosPostalesComponent;
  let fixture: ComponentFixture<ServiciosPostalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosPostalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosPostalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
