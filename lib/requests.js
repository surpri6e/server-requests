var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const testOnLink = /^http:\/\/.|^https:\/\/./;
/**
 * bebra
 */
export class SettingsRequest {
    constructor(options) {
        this._method = options._method;
        this._urlServer = options._urlServer;
        this._responseType = options._responseType;
        this._urlStatus = this.validatorUrlStatus();
        this.validatorUrlServer();
    }
    validatorUrlStatus() {
        if (testOnLink.test(this._urlServer)) {
            return 'valid';
        }
        else {
            return 'invalid';
        }
    }
    validatorUrlServer() {
        if (this._urlStatus === 'invalid') {
            console.error('Invalid link!');
        }
        else {
            return;
        }
    }
}
export function XHRServerRequest(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((res, rej) => {
            const XHR = new XMLHttpRequest();
            XHR.open(options._method, options._urlServer);
            XHR.responseType = options._responseType;
            XHR.onload = () => {
                if (XHR.status > 399) {
                    rej(XHR.response);
                }
                else {
                    res(XHR.response);
                }
            };
            XHR.onerror = () => {
                rej(XHR.response);
            };
            XHR.send();
        });
        // Доабвить сюда then и catch
    });
}
export const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
};
// export async function serverRequest(urlServer: string) {
//     try {
//         await sleep(0);
//         const response = await fetch(urlServer);
//         const data = await response.json();
//         return data;
//     } catch (err) {
//         console.error(err);
//     } finally {
//         console.log('Finally');
//     }
// }
// const serttings = { // : setting
//     url: 'ssss',
//     method: 'normal'
// }
// export async function serverRequestWithoutDelay(/* urlServer: string */) {
// }
// export async function serverRequestWithDelay(/* urlServer: string */) {}
// export function getDataFromServerRequest(data: any) {
//     return JSON.parse(JSON.stringify(data));
// }
