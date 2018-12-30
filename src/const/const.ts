/**
 * Konstanten, die zwischen Client und Server geteilt werden.
 */

// session handling
// IIS call -> IN: ?app=<appName> OUT (from authenticate): { token: <token> }
// IN: { type: NTLM | FORM | NONE, uid: <userID> [, pwd: <password>] } OUT: { token: <token> }
export const authURL = "/authenticate";
// IN: { token: <token> } OUT: JWT
export const loginURL = "/login";
// IN: void OUT: "OK" | error
export const keepaliveURL = "/keepalive";
// f. client keepalive (cookie laeuft 24h)
export const keepaliveMinutes = 5;
// URl f. webapp (static content)
export const staticURL = "/app";
// JWT token header
export const JwtHeader = "X-Auth-Token";
// JWT local storage name
export const JwtToken = "jwt-token";
