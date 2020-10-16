class Bilangan {
    constructor(angka1, angka2) {
        this.angka1 = angka1;
        this.angka2 = angka2;
    }
    static getMax(obj) {
        return (Math.max(obj.angka1, obj.angka2));
    }
    static getMin(obj) {
        return (Math.min(obj.angka1, obj.angka2))
    }
}

let Bil = new Bilangan(100,30);
document.getElementById('hasil').innerHTML = `Angka terbesar antara ${Bil.angka1} & ${Bil.angka2} adalah ${Bilangan.getMax(Bil)} dan yang terkecil adalah ${Bilangan.getMin(Bil)}`;