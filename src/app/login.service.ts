import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { InteractionStatus } from '@azure/msal-browser';
import {
  MSAL_GUARD_CONFIG,
  MsalBroadcastService,
  MsalGuardConfiguration,
  MsalService,
} from '@azure/msal-angular';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private msalBroadcastService: MsalBroadcastService,
    private authService: MsalService
  ) {}

  title = 'msal-angular-tutorial';
  isIframe = false;
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();

  ngOnInit() {
    this.isIframe = window !== window.parent && !window.opener;

    this.msalBroadcastService.inProgress$
      .pipe(
        filter(
          (status: InteractionStatus) => status === InteractionStatus.None
        ),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        this.setLoginDisplay();
      });
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

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
}
