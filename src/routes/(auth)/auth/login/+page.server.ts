import { z } from "zod";
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { errorHandle } from "$lib/utils/handle";
import { delay } from "$lib/utils/delay";

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

const schema = z.object({
    nama_pengguna: z.string(),
    kata_sandi: z.string(),
})

export const actions = {
    login: async ({ request }) => {
        await delay()
        try {
            const form = Object.fromEntries(await request.formData())
            const data = schema.parse(form)
            console.log(data);

        } catch (e) {
            return fail(400, errorHandle(e))
        }

        redirect(302, '/')
    }
} satisfies Actions


