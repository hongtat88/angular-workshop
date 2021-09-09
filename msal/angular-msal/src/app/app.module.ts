import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalBroadcastService, MsalGuard, MsalGuardConfiguration, MsalInterceptor, MsalInterceptorConfiguration, MsalModule, MsalService, MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG } from '@azure/msal-angular';
import { BrowserCacheLocation, InteractionType, IPublicClientApplication, LogLevel, PublicClientApplication } from '@azure/msal-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1; // Remove this line to use Angular Universal

export function loggerCallback(logLevel: LogLevel, message: string) {
  console.log(logLevel, message);
}

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '38d0e551-d5d6-49b1-a147-f5b0b5875fe3', // PPE testing environment
      authority: 'https://login.microsoftonline.com/dbaae54f-bec1-4801-8d00-5a425d0f870a', // PPE testing environment.
      redirectUri: 'http://localhost:4200',
      postLogoutRedirectUri: 'http://localhost:4200/home'
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
      storeAuthStateInCookie: isIE, // set to true for IE 11. Remove this line to use Angular Universal
    },
    system: {
      loggerOptions: {
        loggerCallback,
        logLevel: LogLevel.Info,
        piiLoggingEnabled: false
      }
    }
  });
}

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', ['user.read']);

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap
  };
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: {
      scopes: ['user.read']
    },
    loginFailedRoute: '/login-failed'
  };
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // MsalModule.forRoot(new PublicClientApplication({
    //   auth: {
    //     clientId: '38d0e551-d5d6-49b1-a147-f5b0b5875fe3', // PPE testing environment
    //     authority: 'https://login.microsoftonline.com/dbaae54f-bec1-4801-8d00-5a425d0f870a', // PPE testing environment.
    //     redirectUri: '/',
    //     postLogoutRedirectUri: '/home'
    //   },
    //   cache: {
    //     cacheLocation: BrowserCacheLocation.LocalStorage,
    //     storeAuthStateInCookie: isIE, // set to true for IE 11. Remove this line to use Angular Universal
    //   },
    //   system: {
    //     loggerOptions: {
    //       loggerCallback,
    //       logLevel: LogLevel.Info,
    //       piiLoggingEnabled: false
    //     }
    //   }
    // }), {
    //   interactionType: InteractionType.Redirect,
    //   authRequest: {
    //     scopes: ['user.read']
    //   },
    //   loginFailedRoute: '/login-failed'
    // }, {
    //   interactionType: InteractionType.Redirect,
    //   protectedResourceMap: new Map([
    //     ['https://graph.microsoft.com/v1.0/me', ['user.read']]
    //   ])
    // })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
