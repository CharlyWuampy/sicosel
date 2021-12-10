import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivacionesPostpenalesComponent } from './derivaciones-postpenales.component';

describe('DerivacionesPostpenalesComponent', () => {
  let component: DerivacionesPostpenalesComponent;
  let fixture: ComponentFixture<DerivacionesPostpenalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerivacionesPostpenalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerivacionesPostpenalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
