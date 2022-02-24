/**
    @example
    export async function serverRequest(url: string) {
    try {
        await sleep(0);
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    } finally {
        console.log('Finally');
    }
 */
export declare function serverRequest(url: string): Promise<any>;
export declare function getDataFromServerRequest(data: any): any;
