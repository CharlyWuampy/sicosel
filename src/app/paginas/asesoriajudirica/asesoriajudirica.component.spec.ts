import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriajudiricaComponent } from './asesoriajudirica.component';

describe('AsesoriajudiricaComponent', () => {
  let component: AsesoriajudiricaComponent;
  let fixture: ComponentFixture<AsesoriajudiricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsesoriajudiricaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesoriajudiricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
