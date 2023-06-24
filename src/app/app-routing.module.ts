// Import necessary modules and components
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { BrowserUtils } from "@azure/msal-browser";
import { ListscreenComponent } from './listscreen/listscreen.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ClaimsComponent } from './claims/claims.component';
// import { PoliciesComponent } from './policies/policies.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { HomeComponent } from './home/home.component';

// Define your routes
const routes: Routes = [
  { path: "profile", component: ProfileComponent, canActivate: [MsalGuard] },
  { path: "", component : ListscreenComponent, canActivate: [MsalGuard] },
  {path : "settings", component : SettingsComponent, canActivate: [MsalGuard]},
  {path : "claims", component : ClaimsComponent, canActivate: [MsalGuard]},
  {path : "claims/home", component : HomeComponent, canActivate: [MsalGuard]},
  {path : "policies", component : HomeComponent, canActivate: [MsalGuard]},
  {path : "submissions", component : SubmissionsComponent, canActivate: [MsalGuard]},
  {path : "claims/claim:claim", component : HomeComponent, canActivate: [MsalGuard]},
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // Don't perform initial navigation in iframes or popups
      initialNavigation:
        !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup()
          ? "enabledNonBlocking"
          : "disabled", // Set to enabledBlocking to use Angular Universal
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
