import { z } from "zod";

type ReturnType<T extends z.ZodType> = {
    message: string,
    errors?: z.inferFlattenedErrors<T>['fieldErrors']
}

export function errorHandle<TSchema extends z.ZodType>(e: unknown): ReturnType<TSchema> {
    if (e instanceof z.ZodError) {
        return {
            message: "Kesalahan validasi form",
            errors: e.flatten().fieldErrors
        }
    }

    return {
        message: "Ada kesalahan !"
    }
}