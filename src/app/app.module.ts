import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { EmailviewerComponent } from './emailviewer/emailviewer.component';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import { HomeComponent } from './home/home.component';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';
import { MsfileviewerComponent } from './msfileviewer/msfileviewer.component';
import { MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app.route.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';




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
    ProfileComponent,
    SidenavComponent
  ],
  imports: [
    MatListModule,
    MatTooltipModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserModule,
    PdfViewerModule,
    HttpClientModule,
    NgxDocViewerModule,
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
    {
      interactionType: InteractionType.Redirect,
      authRequest: {
        scopes: ["user.read"],
      },
    },
    {
      interactionType: InteractionType.Redirect,
      protectedResourceMap : new Map(
        [['https://graph.microsoft.com/v1.0/me', ['user.read']]
      ]),
    }
  ),
    BrowserAnimationsModule,
  ],

  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : MsalInterceptor,
    multi : true,
  },
  MsalGuard
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})

export class AppModule { 

}

