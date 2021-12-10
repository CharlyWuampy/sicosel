import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciospostpenalesBComponent } from './serviciospostpenales-b.component';

describe('ServiciospostpenalesBComponent', () => {
  let component: ServiciospostpenalesBComponent;
  let fixture: ComponentFixture<ServiciospostpenalesBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciospostpenalesBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciospostpenalesBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
