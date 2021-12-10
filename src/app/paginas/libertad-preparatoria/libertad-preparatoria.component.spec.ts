import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibertadPreparatoriaComponent } from './libertad-preparatoria.component';

describe('LibertadPreparatoriaComponent', () => {
  let component: LibertadPreparatoriaComponent;
  let fixture: ComponentFixture<LibertadPreparatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibertadPreparatoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibertadPreparatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
