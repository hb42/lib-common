/**
 * Millisekunden in Datum/Zeit-String konvertieren
 *
 * Format: DD.MM.YYYY HH:mm[:SS[.mil]]
 * Millis folgen der ueblichen Logik, z.B. new Date().value.
 *
 * @param millis - number: Millisekunden, die umgerechndet werden
 * @param sec - boolean: Sekunden mit ausgeben
 * @param milli - boolean: Millisekunden ausgeben
 */
export const dateString = (millis: number, sec?: boolean, milli?: boolean): string => {
  const d = new Date(millis);
  let str = ("0" + d.getDate()).slice(-2) + "." + ("0" + (d.getMonth() + 1)).slice(-2) + "." +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
  if (sec || milli) {
    str += ":" + ("0" + d.getSeconds()).slice(-2);
  }
  if (milli) {
    str += "." + ("00" + d.getMilliseconds()).slice(-3);
  }
  return str;
};

/**
 * Server-Adresse fuer Server Sent Events (SSE)
 *
 * Die Adresse soll zur Unterscheidung von anderen REST-APIs immer
 * mit /sse/ beginnen. Dies wird hier sichergestellt.
 *
 * Sowohl im Server, als auch im Client wird die Adresse mit
 * z.B. makeSseUrl(AppName) erzeugt => /sse/AppName
 *
 * @param addr
 */
export const makeSseUrl = (addr: string): string => {
  return addr.startsWith("/sse/") ? addr : "/sse" + (addr.startsWith("/") ? addr : "/" + addr);
};
