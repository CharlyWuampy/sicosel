import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralesPaginaComponent } from './generales-pagina.component';

describe('GeneralesPaginaComponent', () => {
  let component: GeneralesPaginaComponent;
  let fixture: ComponentFixture<GeneralesPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralesPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralesPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
