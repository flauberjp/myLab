import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client';

@Injectable()
export class AuthService {

  constructor() { }

  
}

export function getClientSettings(): UserManagerSettings {
  return {
      authority: 'https://localhost:44380/',
      client_id: 'nfse_frontend',
      redirect_uri: 'http://localhost:4200/auth-callback',
      post_logout_redirect_uri: 'http://localhost:4200/',
      response_type:"id_token token",
      scope:"openid profile api1",
      filterProtocolClaims: true,
      loadUserInfo: true
  };
}