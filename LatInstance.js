// Latihan INSTANCE
class Buku {
    constructor(id, judul, pengarang) {
        this.id = id,
        this.judul = judul,
        this.pengarang = pengarang
    }

    // penulisan function dalam class hanya bisa namaFunction() & namaFunction = () =>. sementara function namaFunction() tidak bisa.
    // mendapatkan/memanggil function bisa dengan menulis getId() dan get getPengarang(). khusus get getPengarang() nanti pada saat pemanggilannya tidak mengikutsertakan (), jadinya getPengarang[lihat baris ke 34 & 37]
    getId() {
        return this.id;
    }
    getJudul() {
        return this.judul;
    }
    get getPengarang() {
        return this.pengarang;
    }
    tampil = () => {
        return `${this.getJudul()} ${this.pengarang}`;
    }
}
    // Mencoba overwriting dataBuku

buku1 = new Buku(1, 'Belajar Programming', 'yusuf suyusuf');
let dataBuku = `ID= ${buku1.getId()} | Judul Buku= ${buku1.getJudul()} | Pengarang= ${buku1.getPengarang}`;

buku2 = new Buku(2, 'Belajar Desain', 'malik kumbang');
dataBuku = dataBuku + `<hr> ID= ${buku2.getId()} | Judul Buku= ${buku2.getJudul()} | Pengarang= ${buku2.getPengarang}`;
document.getElementById('hasil').innerHTML = dataBuku;
