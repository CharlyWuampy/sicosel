import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibertadCondicionadaComponent } from './libertad-condicionada.component';

describe('LibertadCondicionadaComponent', () => {
  let component: LibertadCondicionadaComponent;
  let fixture: ComponentFixture<LibertadCondicionadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibertadCondicionadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibertadCondicionadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
