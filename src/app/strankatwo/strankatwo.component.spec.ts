import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrankatwoComponent } from './strankatwo.component';

describe('StrankatwoComponent', () => {
  let component: StrankatwoComponent;
  let fixture: ComponentFixture<StrankatwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrankatwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrankatwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
