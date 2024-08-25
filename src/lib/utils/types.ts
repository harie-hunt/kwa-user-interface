export type Rekap = {
    anggota: number,
    simpanan: number
    pinjaman: number
} | undefined

export type Kelamin = "L" | "P"


export type Anggota = {
    id: string
    no: string
    nama: string
    kelamin: Kelamin
    tempat_lahir?: string
    tanggal_lahir?: Date
    nik?: string | number
    kk?: string | number
    pekerjaan?: string
    alamat?: string
    hp?: string | number
    tanggal_masuk: Date
    tanggal_keluar?: Date
    aktif: boolean
    created_by: string
    created_at: Date
    updated_by?: string
    updated_at?: Date
}