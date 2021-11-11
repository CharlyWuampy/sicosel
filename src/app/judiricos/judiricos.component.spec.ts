import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudiricosComponent } from './judiricos.component';

describe('JudiricosComponent', () => {
  let component: JudiricosComponent;
  let fixture: ComponentFixture<JudiricosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudiricosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JudiricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
