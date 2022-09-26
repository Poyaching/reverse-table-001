import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseTableComponent } from './reverse-table.component';

describe('ReverseTableComponent', () => {
  let component: ReverseTableComponent;
  let fixture: ComponentFixture<ReverseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReverseTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
