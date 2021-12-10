import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonativosotorgadosComponent } from './donativosotorgados.component';

describe('DonativosotorgadosComponent', () => {
  let component: DonativosotorgadosComponent;
  let fixture: ComponentFixture<DonativosotorgadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonativosotorgadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonativosotorgadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
