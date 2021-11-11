import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibertadSupervisadaComponent } from './libertad-supervisada.component';

describe('LibertadSupervisadaComponent', () => {
  let component: LibertadSupervisadaComponent;
  let fixture: ComponentFixture<LibertadSupervisadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibertadSupervisadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibertadSupervisadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
