const sleep = (ms: number): Promise<number>  => {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve(ms);
        }, ms)
    })
}

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
}