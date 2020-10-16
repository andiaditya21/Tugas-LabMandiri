class Buku {
    constructor(id, judul, pengarang) {
        this.id = id,
        this.judul = judul,
        this.pengarang = pengarang
    }
    
    // Latihan INHERITANCE
        getId() {
            return this.id;
        }
        getJudul() {
            return this.judul;
        }
        get getPengarang() {
            return this.pengarang;
        }
}

class AboutBuku extends Buku {
    constructor(id, judul, pengarang, penerbit) {
        super(id, judul, pengarang);
        this.penerbit = penerbit;
    }
    showAll() {
        return `Buku dengan judul ${this.getJudul()} ditulis oleh ${this.getPengarang} dengan identitas ${this.getId()} diterbitkan oleh ${this.penerbit}`
    }
}

bukuku = new AboutBuku(1, 'Belajar Programming', 'yusuf suyusuf', 'aerlanggi');
document.getElementById('hasil').innerHTML = bukuku.showAll();


