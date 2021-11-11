import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajosocialBComponent } from './trabajosocial-b.component';

describe('TrabajosocialBComponent', () => {
  let component: TrabajosocialBComponent;
  let fixture: ComponentFixture<TrabajosocialBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajosocialBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajosocialBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
