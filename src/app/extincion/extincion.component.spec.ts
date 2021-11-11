import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtincionComponent } from './extincion.component';

describe('ExtincionComponent', () => {
  let component: ExtincionComponent;
  let fixture: ComponentFixture<ExtincionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtincionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtincionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
