import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemisionParcialDeLaPenaComponent } from './remision-parcial-de-la-pena.component';

describe('RemisionParcialDeLaPenaComponent', () => {
  let component: RemisionParcialDeLaPenaComponent;
  let fixture: ComponentFixture<RemisionParcialDeLaPenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemisionParcialDeLaPenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemisionParcialDeLaPenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
