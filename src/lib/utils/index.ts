export function pickObj<T extends Record<string, any>>(obj: T, arr: (keyof T)[]) {
    return Object.fromEntries(
        Object.entries(obj).filter(([k]) => arr.includes(k))
    );
}

export function omitObj<T extends Record<string, any>>(obj: T, arr: (keyof T)[]) {
    return Object.fromEntries(
        Object.entries(obj).filter(([k]) => !arr.includes(k))
    );
}

//   const obj = { a: 1, b: '2', c: 3 };

//   pickBy(obj, x => typeof x === 'number'); // { a: 1, c: 3 }
//   omitBy(obj, x => typeof x !== 'number'); // { a: 1, c: 3 }