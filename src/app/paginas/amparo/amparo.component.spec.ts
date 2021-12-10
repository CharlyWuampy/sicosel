import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmparoComponent } from './amparo.component';

describe('AmparoComponent', () => {
  let component: AmparoComponent;
  let fixture: ComponentFixture<AmparoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmparoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmparoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
