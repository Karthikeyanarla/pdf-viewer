import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-msfileviewer',
  templateUrl: './msfileviewer.component.html',
  styleUrls: ['./msfileviewer.component.scss']
})
export class MsfileviewerComponent {

  @Input()
  url : string;
}
