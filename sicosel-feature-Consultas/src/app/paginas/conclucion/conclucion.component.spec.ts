import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclucionComponent } from './conclucion.component';

describe('ConclucionComponent', () => {
  let component: ConclucionComponent;
  let fixture: ComponentFixture<ConclucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConclucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConclucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
