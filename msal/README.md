# MSAL for Angular

https://auth0.com/docs/authorization/flows/authorization-code-flow
https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-implicit-grant-flow

https://docs.microsoft.com/en-us/learn/modules/explore-basic-services-identity-types/5-describe-external-identities

## Configure new tenant

## Configure new app registration

## Create new Angular

ng g m features/home --routing
ng g c features/home --module=home

ng g m features/protected-one --routing
ng g c features/protected-one --module=protected-one

ng g m features/protected-two --routing
ng g c features/protected-two --module=protected-two

ng g m login-failed --routing
ng g c login-failed --module=login-failed

## Install msal packages 

```bash
npm install @azure/msal-angular
npm install @azure/msal-browser
```

## Configure MSAL settings

## Get user info - Interceptor

## Configure protected pages - Guard

## Configure logout - MSAL Service + broadcaster

# Reference

[Get started with MSAL](https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-angular-auth-code)
[MSAL for Angular Example](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/samples/msal-angular-v2-samples)
