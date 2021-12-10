import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosPostalesLOGComponent } from './servicios-postales-log.component';

describe('ServiciosPostalesLOGComponent', () => {
  let component: ServiciosPostalesLOGComponent;
  let fixture: ComponentFixture<ServiciosPostalesLOGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosPostalesLOGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosPostalesLOGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
