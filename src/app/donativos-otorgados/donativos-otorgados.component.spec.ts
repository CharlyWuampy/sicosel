import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonativosOtorgadosComponent } from './donativos-otorgados.component';

describe('DonativosOtorgadosComponent', () => {
  let component: DonativosOtorgadosComponent;
  let fixture: ComponentFixture<DonativosOtorgadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonativosOtorgadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonativosOtorgadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
