export declare type isValidLink = 'valid' | 'invalid';
export declare type methodRequest = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export declare type resTypeRequest = "" | "arraybuffer" | "blob" | "document" | "json" | "text";
export declare type errorOfRequest = 'Temporary-error' | 'Status-error' | 'Unexplained error';
/**
 * A convenient interface that allows you to create a setting object for a request to the server
 */
export interface settingsRequest {
    /**
     * A static link that will send questions to the server
     */
    readonly _urlServer: string;
    /**
     * The type to be assigned to the response
     */
    readonly _responseType: resTypeRequest;
    /**
     * This field allows you to select which request method will go to the server
     */
    readonly _method: methodRequest;
}
