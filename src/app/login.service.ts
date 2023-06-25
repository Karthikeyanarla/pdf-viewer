import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { EventMessage, EventType, InteractionStatus } from '@azure/msal-browser';
import { filter } from 'rxjs/operators';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private authService: MsalService, private msalBroadcastService: MsalBroadcastService,
  ) {}

  private readonly _destroying$ = new Subject<void>();

  login() {
    this.authService.loginRedirect();
  }

  logout() {
    // Add log out function here
    this.authService.logoutRedirect({
      postLogoutRedirectUri: 'http://localhost:4200',
    });
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }


  loginDisplay = false;

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
    console.log(this.loginDisplay);
  }

  emitMethod(): void {
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
}
