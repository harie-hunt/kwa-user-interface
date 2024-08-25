import type { Anggota } from '$lib/utils/types';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return { promise_anggotas: getData() };
}) satisfies PageServerLoad;


async function getData(): Promise<Anggota[]> {
    return [
        { id: 'a1', no: 'a123', nama: 'ajeng', tanggal_masuk: new Date(), created_at: new Date(), created_by: 'b1', kelamin: "P", aktif: true },
        { id: 'a1', no: 'a124', nama: 'lumkan', tanggal_masuk: new Date(), created_at: new Date(), created_by: 'b1', kelamin: "L", aktif: true }
    ]
}