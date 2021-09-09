import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { InteractionStatus } from '@azure/msal-browser';
import { filter, tap } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

  userProfile$ = this.httpClient.get<ProfileType>(this.GRAPH_ENDPOINT);
  
  isLogin$ = this.msalBroadcastService.inProgress$.pipe(
    tap(console.log),
    filter((status: InteractionStatus) => status === InteractionStatus.None)
  );

  constructor(
    private httpClient: HttpClient,
    private msalService: MsalService,
    private msalBroadcastService: MsalBroadcastService
  ) { }

  logout(): void {
    this.msalService.logout();
  }
}

export type ProfileType = {
  displayName?: string,
  givenName?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string
};
