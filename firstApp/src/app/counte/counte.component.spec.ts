import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounteComponent } from './counte.component';

describe('CounteComponent', () => {
  let component: CounteComponent;
  let fixture: ComponentFixture<CounteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
