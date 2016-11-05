/**
 * Created by hb on 06.08.16.
 */

// session handling
// IIS call -> IN: ?app=<appName> OUT (from authenticate): { token: <token> }
// IN: { type: NTLM | FORM | NONE, uid: <userID> [, pwd: <password>] } OUT: { token: <token> }
export const authURL = "/authenticate";
// IN: { token: <token> } OUT: sessionData
export const loginURL = "/login";
// IN: void OUT: "OK" | error
export const keepaliveURL = "/keepalive";
// f. client keepalive (cookie laeuft 24h)
export const keepaliveMinutes = 5;
// IN: sessionData OUT: "OK" | "ERROR"
export const saveSessionURL = "/setuserdata";
