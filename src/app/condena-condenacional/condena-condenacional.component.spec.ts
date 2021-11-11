import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondenaCondenacionalComponent } from './condena-condenacional.component';

describe('CondenaCondenacionalComponent', () => {
  let component: CondenaCondenacionalComponent;
  let fixture: ComponentFixture<CondenaCondenacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondenaCondenacionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondenaCondenacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
