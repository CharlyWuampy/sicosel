import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSerpostalesComponent } from './log-serpostales.component';

describe('LogSerpostalesComponent', () => {
  let component: LogSerpostalesComponent;
  let fixture: ComponentFixture<LogSerpostalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogSerpostalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSerpostalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
