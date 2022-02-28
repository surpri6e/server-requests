import { settingsRequest, resTypeRequest, isValidLink, methodRequest } from "settingsRequest.js";

const testOnLink: RegExp = /^http:\/\/.|^https:\/\/./;

/**
 * bebra
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

export async function XHRServerRequest(options: settingsRequest) {
    return new Promise((res, rej) => {
        const XHR = new XMLHttpRequest();

        XHR.open(options._method, options._urlServer);
        XHR.responseType = options._responseType;

        XHR.onload = () => {
            if(XHR.status > 399) {
                rej(XHR.response);
            } else {
                res(XHR.response);
            }
        }

        XHR.onerror = () => {
            rej(XHR.response)
        }

        XHR.send();
    }) 

    // Доабвить сюда then и catch
}

export const sleep = (ms: number): Promise<number> => {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve(ms);
        }, ms)
    })
}

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