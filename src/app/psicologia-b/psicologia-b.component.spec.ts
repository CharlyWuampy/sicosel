import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologiaBComponent } from './psicologia-b.component';

describe('PsicologiaBComponent', () => {
  let component: PsicologiaBComponent;
  let fixture: ComponentFixture<PsicologiaBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsicologiaBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsicologiaBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
