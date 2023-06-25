import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCellRenderComponent } from './button-cell-render.component';

describe('ButtonCellRenderComponent', () => {
  let component: ButtonCellRenderComponent;
  let fixture: ComponentFixture<ButtonCellRenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonCellRenderComponent]
    });
    fixture = TestBed.createComponent(ButtonCellRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
