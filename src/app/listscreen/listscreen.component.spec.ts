import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListscreenComponent } from './listscreen.component';

describe('ListscreenComponent', () => {
  let component: ListscreenComponent;
  let fixture: ComponentFixture<ListscreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListscreenComponent]
    });
    fixture = TestBed.createComponent(ListscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
