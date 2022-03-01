import { settingsRequest, resTypeRequest, isValidLink, methodRequest, errorOfRequest } from './settingsRequest.js';

const testOnLink: RegExp = /^http:\/\/.|^https:\/\/./;

/**
 * If you are sending many different requests, you can make a separate statement object using this class
 */
export class SettingsRequest implements settingsRequest {
    readonly _responseType: resTypeRequest;
    readonly _urlServer: string;
    readonly _urlStatus: isValidLink;
    readonly _method: methodRequest;

    constructor(options: settingsRequest) {
        this._method = options._method;
        this._urlServer = options._urlServer;
        this._responseType = options._responseType;
        this._urlStatus = this.validatorUrlStatus();
        this.validatorUrlServer();
    }

    private validatorUrlStatus(): isValidLink {
        if(testOnLink.test(this._urlServer)) {
            return 'valid';
        } else {
            return 'invalid';
        }
    }

    private validatorUrlServer(): void {
        if(this._urlStatus === 'invalid') {
            console.error('Invalid link!');
        } else {
            return;
        }
    }
}

/**
 * Function to create an XHR request to the server
 */
export async function XHRServerRequest(options: settingsRequest, body: any = null) {
    return new Promise <any>((res, rej) => {
        const XHR = new XMLHttpRequest();
        let error: errorOfRequest;

        XHR.open(options._method, options._urlServer);
        XHR.responseType = options._responseType;

        if(options._responseType === 'json') {
            XHR.setRequestHeader('Content-Type', 'application/json');
        }

        XHR.onreadystatechange = () => {
            if(XHR.readyState === 4 && XHR.status < 400) {
                res(XHR.response);
            }
        }

        if(XHR.status >= 400) {
            rej(error = 'Status-error');
        }

        XHR.onerror = () => {
            rej(error = 'Unexplained error');
        }

        XHR.timeout = 2000;
        XHR.ontimeout = () => {
            rej(error = 'Temporary-error');
        }

        if(options._method === 'POST') {
            XHR.send(body);
        } else {
            XHR.send();
        }
    }) 
    .then(data => {
        return new Promise((resolve) => {
            resolve(data);
        })
    })
    .catch(err => {
        console.error(err);
    })
}