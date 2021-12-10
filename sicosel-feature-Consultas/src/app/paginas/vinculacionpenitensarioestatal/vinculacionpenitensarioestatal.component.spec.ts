import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionpenitensarioestatalComponent } from './vinculacionpenitensarioestatal.component';

describe('VinculacionpenitensarioestatalComponent', () => {
  let component: VinculacionpenitensarioestatalComponent;
  let fixture: ComponentFixture<VinculacionpenitensarioestatalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinculacionpenitensarioestatalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculacionpenitensarioestatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
