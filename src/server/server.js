var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
};
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
export function serverRequest(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sleep(0);
            const response = yield fetch(url);
            const data = yield response.json();
            return data;
        }
        catch (err) {
            console.error(err);
        }
        finally {
            console.log('Finally');
        }
    });
}
export function getDataFromServerRequest(data) {
    return JSON.parse(JSON.stringify(data));
}
