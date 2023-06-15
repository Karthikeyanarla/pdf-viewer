import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrls: ['./pdfviewer.component.css']
})
export class PdfviewerComponent implements OnInit {


  @Input()
  public pdfSrc : string;

  ngOnInit(): void {
  }
}
