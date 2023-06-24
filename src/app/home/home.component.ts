import { Component } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { EventMessage, EventType, InteractionStatus } from '@azure/msal-browser';
import { filter } from 'rxjs';


import { AttachDocument } from 'src/models/document.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selectedComponent: string | null = null;
  public fileList: AttachDocument[] = [];
  loginDisplay = false;


    constructor(private authService: MsalService, private msalBroadcastService: MsalBroadcastService) {

    const file1 = {
      contentUrl : 'assets/book.pdf',
      contentType :'pdf',
      filename : 'Star WC-125 & 130 App.pdf',
    };

    const file2 = {
      contentUrl : 'https://datastorageaxa.blob.core.windows.net/emailattachments/emailtest/Star SOV.XLS',
      contentType :'xls',
      filename : 'Star SOV.XLS',
    }

    const file3 = {
      contentUrl : 'https://datastorageaxa.blob.core.windows.net/emailattachments/emailtest/test.eml',
      contentType :'eml',
      filename : 'test.eml',
    }


    const file4 = {
      contentUrl : 'https://datastorageaxa.blob.core.windows.net/emailattachments/AAMkADZjYzY4MmJlLTg0OTYtNDkxOS1hODUzLWM2YTM4MDEwYzg2ZgBGAAAAAABlYV4vemNjTqPOO3FT1RqdBwDq5TvYGZ4sQ6bzBMp7rqUAAAAAAEMAADq5TvYGZ4sQ6bzBMp7rqUAAQ1xZeeAAA=/dtSearch.docx',
      contentType :'docx',
      filename : 'dtSearch.docx',
    }

    const file5 = {
      contentUrl : 'https://datastorageaxa.blob.core.windows.net/emailattachments/AAMkADZjYzY4MmJlLTg0OTYtNDkxOS1hODUzLWM2YTM4MDEwYzg2ZgBGAAAAAABlYV4vemNjTqPOO3FT1RqdBwDq5TvYGZ4sQ6bzBMp7rqUAAAAAAEMAADq5TvYGZ4sQ6bzBMp7rqUAAQ1xZeeAAA=/dtSearch.docx',
      contentType :'docx',
      filename : 'dtSearc.docx',
    }

    const file6 = {
      contentUrl : 'https://datastorageaxa.blob.core.windows.net/emailattachments/AAMkADZjYzY4MmJlLTg0OTYtNDkxOS1hODUzLWM2YTM4MDEwYzg2ZgBGAAAAAABlYV4vemNjTqPOO3FT1RqdBwDq5TvYGZ4sQ6bzBMp7rqUAAAAAAEMAADq5TvYGZ4sQ6bzBMp7rqUAAQ1xZeeAAA=/dtSearch.docx',
      contentType :'docx',
      filename : 'dtesrech.docx',
    }

    const file7 = {
      contentUrl : 'https://datastorageaxa.blob.core.windows.net/emailattachments/emailtest/Test.msg',
      contentType :'msg',
      filename : 'test.msg',
    }

    this.fileList = [file1, file2, file3, file4, file5, file6, file7];

  }

  selectComponent(componentName: string) {
    console.log(componentName);
    this.selectedComponent = componentName;
  }

  ngOnInit(): void {
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
      )
      .subscribe((result: EventMessage) => {
        console.log(result);
      });

    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None)
      )
      .subscribe(() => {
        this.setLoginDisplay();
      })
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }


}
