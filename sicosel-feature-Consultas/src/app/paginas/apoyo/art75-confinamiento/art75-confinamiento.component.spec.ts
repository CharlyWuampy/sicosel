import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art75ConfinamientoComponent } from './art75-confinamiento.component';

describe('Art75ConfinamientoComponent', () => {
  let component: Art75ConfinamientoComponent;
  let fixture: ComponentFixture<Art75ConfinamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Art75ConfinamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Art75ConfinamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
