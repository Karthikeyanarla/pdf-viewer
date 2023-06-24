import { Component } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import {
  EventMessage,
  EventType,
  InteractionStatus,
} from '@azure/msal-browser';
import { filter } from 'rxjs';
import { LoginService } from '../login.service';
import { ProfileService } from '../profile.service';
import { Profile } from 'src/models/profile.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  loginDisplay = false;
  userProfile: Profile = {givenName : "" , surname : "", id : "", userPrincipalName : ""};

  constructor(
    private loginService: LoginService,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS)
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
      });

      this.profileService.getProfile()
      .then(profile => {
        this.userProfile = profile;
      })
      .catch(error => {
        console.error('Error fetching user profile:', error);
      });
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  login() {
    this.loginService.login();
  }

  logout() {
    this.loginService.logout();
  }
}
