class Mahasiswa {
    constructor(nama, nim) {
        this.nama = nama;
        this.nim = nim;
    }

    tampilInfo() {
        console.log(`Nama: ${this.nama}`);
        console.log(`NIM: ${this.nim}`);
    }
}

// Membuat objek
const mhs1 = new Mahasiswa("Budi", "12345");
mhs1.tampilInfo();