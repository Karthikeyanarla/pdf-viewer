import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-button-cell-render',
  templateUrl: './button-cell-render.component.html',
  styleUrls: ['./button-cell-render.component.scss']
})
export class ButtonCellRenderComponent implements ICellRendererAngularComp{

  value : any;


  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }

  agInit(params: ICellRendererParams): void {
    this. value = params.value;
  }

  onEditClicked(event : any): void {
    // Handle edit button click
    console.log('Edit Clicked for Row:', this.value);
  }

  onViewClicked(event : any): void {
    // Handle view button click
    console.log('View Clicked for Row:', this.value);
  }

}
