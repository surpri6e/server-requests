import { settingsRequest, resTypeRequest, isValidLink, methodRequest } from './settingsRequest.js';
/**
 * If you are sending many different requests, you can make a separate statement object using this class
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
/**
 * Function to create an XHR request to the server
 */
export declare function XHRServerRequest(options: settingsRequest, body?: any): Promise<unknown>;
