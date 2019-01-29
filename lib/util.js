"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateString = (millis, sec, milli) => {
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
exports.makeSseUrl = (addr) => {
    return addr.startsWith("/sse/") ? addr : "/sse" + (addr.startsWith("/") ? addr : "/" + addr);
};
//# sourceMappingURL=util.js.map