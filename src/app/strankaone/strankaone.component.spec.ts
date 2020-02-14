import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrankaoneComponent } from './strankaone.component';

describe('StrankaoneComponent', () => {
  let component: StrankaoneComponent;
  let fixture: ComponentFixture<StrankaoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrankaoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrankaoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
