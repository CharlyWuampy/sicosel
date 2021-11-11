import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SICOSELLOGComponent } from './sicosellog.component';

describe('SICOSELLOGComponent', () => {
  let component: SICOSELLOGComponent;
  let fixture: ComponentFixture<SICOSELLOGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SICOSELLOGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SICOSELLOGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
