import { Component } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { ButtonCellRenderComponent } from '../button-cell-render/button-cell-render.component';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss'],
})
export class ClaimsComponent {
  columnDefs: ColDef[] = [
    {
      headerName: 'Claim Number',
      field: 'claimNumber',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Claim Description',
      field: 'claimDescription',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Claim Status',
      field: 'claimStatus',
      sortable: true,
      filter: true,
    },
    { headerName: 'Actions', cellRenderer: ButtonCellRenderComponent },
  ];

  rowData = [
    {
      claimNumber: 'CLM001',
      claimDescription: 'Lorem ipsum dolor sit amet',
      claimStatus: 'Pending',
    },
    {
      claimNumber: 'CLM002',
      claimDescription: 'Consectetur adipiscing elit',
      claimStatus: 'Approved',
    },
    {
      claimNumber: 'CLM002',
      claimDescription: 'Consectetur adipiscing elit',
      claimStatus: 'Approved',
    },

    {
      claimNumber: 'CLM002',
      claimDescription: 'Consectetur adipiscing elit',
      claimStatus: 'Approved',
    },

    {
      claimNumber: 'CLM002',
      claimDescription: 'Consectetur adipiscing elit',
      claimStatus: 'Approved',
    },

    {
      claimNumber: 'CLM002',
      claimDescription: 'Consectetur adipiscing elit',
      claimStatus: 'Approved',
    },

    {
      claimNumber: 'CLM003',
      claimDescription: 'Sed do eiusmod tempor incididunt',
      claimStatus: 'Rejected',
    },
  ];

  defaultColDef = {
    flex: 1,
    resizable: true,
  };

  gridOptions: GridOptions = {
    domLayout : 'autoHeight',
  };
}
