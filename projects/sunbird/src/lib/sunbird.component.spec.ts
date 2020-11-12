import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunbirdComponent } from './sunbird.component';

describe('SunbirdComponent', () => {
  let component: SunbirdComponent;
  let fixture: ComponentFixture<SunbirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunbirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunbirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
