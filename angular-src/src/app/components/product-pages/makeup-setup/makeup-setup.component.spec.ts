import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupSetupComponent } from './makeup-setup.component';

describe('MakeupSetupComponent', () => {
  let component: MakeupSetupComponent;
  let fixture: ComponentFixture<MakeupSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeupSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeupSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
