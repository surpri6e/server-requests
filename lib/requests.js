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
 * If you are sending many different requests, you can make a separate statement object using this class
 */
export class SettingsRequest {
    constructor(urlServer, method = 'GET', responseType = 'json') {
        this._method = method;
        this._urlServer = urlServer;
        this._responseType = responseType;
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
/**
 * Function to create an XHR request to the server
 */
export function XHRServerRequest(options, body = null) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((res, rej) => {
            const XHR = new XMLHttpRequest();
            let error;
            XHR.open(options._method, options._urlServer);
            XHR.responseType = options._responseType;
            if (options._responseType === 'json') {
                XHR.setRequestHeader('Content-Type', 'application/json');
            }
            XHR.setRequestHeader('Content-Type', 'application');
            XHR.onreadystatechange = () => {
                if (XHR.readyState === 4 && XHR.status < 400) {
                    res(XHR.response);
                }
            };
            if (XHR.status >= 400) {
                rej(error = 'Status-error');
            }
            XHR.onerror = () => {
                rej(error = 'Unexplained error');
            };
            XHR.timeout = 2000;
            XHR.ontimeout = () => {
                rej(error = 'Temporary-error');
            };
            if (options._method === 'POST') {
                XHR.send(JSON.parse(JSON.stringify(body)));
            }
            else {
                XHR.send();
            }
        })
            .then(data => {
            return new Promise((resolve) => {
                resolve(data);
            });
        })
            .catch(err => {
            console.error(err);
        });
    });
}
