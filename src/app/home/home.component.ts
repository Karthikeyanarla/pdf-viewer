import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedComponent: string | null = null;

  selectComponent(componentName: string) {
    console.log(componentName);
    this.selectedComponent = componentName;
  }
}
