import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbFormComponent } from './sb-form.component';

describe('SbFormComponent', () => {
  let component: SbFormComponent;
  let fixture: ComponentFixture<SbFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
