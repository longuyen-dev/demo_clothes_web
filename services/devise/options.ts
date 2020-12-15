export interface DeviseOptions {
  host: string; //          ex: http://api.domain.com || https://api.domain.com
  prefixUrl?: string; //    ex: /api/v1
  authUrl?: DeviseUrls;
  emailField?: string; //       default: 'email'
  passwordField?: string; //    default: 'password'
  debug?: boolean; //  default: false
  useRoles?: boolean; // default: false
  mode?: "local" | "session"; // default: 'local'
}

export interface DeviseUrls {
  base?: string; //          default: /auth
  signIn?: string; //        default: /sign_in
  signOut?: string; //       default: /sign_out
  validateToken?: string; // default: /validate_token
}

export interface DeviseHeader {
  "access-token": string;
  "cache-control": string;
  client: string;
  "content-type": string;
  expiry: string;
  "token-type": string;
  uid: string;
}

export interface PrivateRouteOptions {
  method?:
    | "GET"
    | "POST"
    | "PUT"
    | "DELETE"
    | "get"
    | "delete"
    | "head"
    | "HEAD"
    | "options"
    | "OPTIONS"
    | "post"
    | "put"
    | "patch"
    | "PATCH";
  data?: object | FormData;
  params?: object | string;
  headers?: object;
}
