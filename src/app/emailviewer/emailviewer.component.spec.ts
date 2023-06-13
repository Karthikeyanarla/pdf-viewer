import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailviewerComponent } from './emailviewer.component';

describe('EmailviewerComponent', () => {
  let component: EmailviewerComponent;
  let fixture: ComponentFixture<EmailviewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailviewerComponent]
    });
    fixture = TestBed.createComponent(EmailviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
