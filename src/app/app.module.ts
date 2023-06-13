import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HttpClientModule } from '@angular/common/http';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { EmailviewerComponent } from './emailviewer/emailviewer.component';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';
import { MsfileviewerComponent } from './msfileviewer/msfileviewer.component';



// import { EmlParser } from 'eml-format';
@NgModule({
  declarations: [
    AppComponent,
    EmailviewerComponent,
    SafeHtmlPipe,
    HomeComponent,
    PdfviewerComponent,
    MsfileviewerComponent,
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    HttpClientModule,
    NgxDocViewerModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 

}
