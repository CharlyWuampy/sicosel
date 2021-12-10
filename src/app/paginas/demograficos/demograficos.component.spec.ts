import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemograficosComponent } from './demograficos.component';

describe('DemograficosComponent', () => {
  let component: DemograficosComponent;
  let fixture: ComponentFixture<DemograficosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemograficosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemograficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
