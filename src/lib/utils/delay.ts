export async function delay(ms: number = 2000) {
    return await new Promise(res => setTimeout(res, ms))
}