import { delay } from '$lib/utils/delay';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return { promise_rekap: getRekap() };
}) satisfies PageServerLoad;


async function getRekap() {
    await delay()
    return {
        anggota: 20,
        simpanan: 200000,
        pinjaman: 5000000
    }
}