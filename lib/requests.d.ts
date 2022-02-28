import { settingsRequest, resTypeRequest, isValidLink, methodRequest } from "settingsRequest.js";
/**
 * bebra
 */
export declare class SettingsRequest implements settingsRequest {
    readonly _responseType: resTypeRequest;
    readonly _urlServer: string;
    readonly _urlStatus: isValidLink;
    readonly _method: methodRequest;
    constructor(options: settingsRequest);
    private validatorUrlStatus;
    private validatorUrlServer;
}
export declare function XHRServerRequest(options: settingsRequest): Promise<unknown>;
export declare const sleep: (ms: number) => Promise<number>;
