import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointssComponent } from './pointss.component';

describe('PointssComponent', () => {
  let component: PointssComponent;
  let fixture: ComponentFixture<PointssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
