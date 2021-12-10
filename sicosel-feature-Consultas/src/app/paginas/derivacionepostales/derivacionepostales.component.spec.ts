import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivacionepostalesComponent } from './derivacionepostales.component';

describe('DerivacionepostalesComponent', () => {
  let component: DerivacionepostalesComponent;
  let fixture: ComponentFixture<DerivacionepostalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerivacionepostalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerivacionepostalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
