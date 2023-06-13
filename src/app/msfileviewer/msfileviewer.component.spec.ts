import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsfileviewerComponent } from './msfileviewer.component';

describe('MsfileviewerComponent', () => {
  let component: MsfileviewerComponent;
  let fixture: ComponentFixture<MsfileviewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsfileviewerComponent]
    });
    fixture = TestBed.createComponent(MsfileviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
