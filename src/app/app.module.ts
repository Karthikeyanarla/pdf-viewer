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
import { MsalModule } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';


const isIE =
  window.navigator.userAgent.indexOf("MSIE ") > -1 ||
  window.navigator.userAgent.indexOf("Trident/") > -1;

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
    RouterModule.forRoot([]),
    MsalModule.forRoot(new PublicClientApplication({
      auth: {
        clientId: "6ffb06e1-440c-472b-8a35-9bbb6948b5fa", // Application (client) ID from the app registration
        authority:
          "https://login.microsoftonline.com/51d939e2-aefc-44e9-83a7-645e3ad16a3b", // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
        redirectUri: "http://localhost:4200/", // This is your redirect URI
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: isIE, // Set to true for Internet Explorer 11
      },
    }),
    null,
    null
  ),
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 

}

