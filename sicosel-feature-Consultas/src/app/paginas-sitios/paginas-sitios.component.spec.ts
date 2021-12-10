import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginasSitiosComponent } from './paginas-sitios.component';

describe('PaginasSitiosComponent', () => {
  let component: PaginasSitiosComponent;
  let fixture: ComponentFixture<PaginasSitiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginasSitiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginasSitiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
