import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgviewerComponent } from './msgviewer.component';

describe('MsgviewerComponent', () => {
  let component: MsgviewerComponent;
  let fixture: ComponentFixture<MsgviewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsgviewerComponent]
    });
    fixture = TestBed.createComponent(MsgviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
