import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadasDeTrabajoComponent } from './jornadas-de-trabajo.component';

describe('JornadasDeTrabajoComponent', () => {
  let component: JornadasDeTrabajoComponent;
  let fixture: ComponentFixture<JornadasDeTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JornadasDeTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JornadasDeTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
