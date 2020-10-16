//LATIHAN 1 - CLASS & INSTANCE
// class Hewan {
//     constructor(nama, jenis) {
//         this.nama = nama;
//         this.jenis = jenis;
//     }
// }

// Kucing = new Hewan('kucing', 'meowderman');
// Kucing.jenis = 'bapaklia';
// console.log(Kucing);
// console.log(Kucing.jenis);


// LATIHAN 2 - SETTER & GETTER
// class Hewan {
//     constructor(nama, jenis) {
//         this.nama = nama;
//         this._jenis = null;
//     }
//     get jenis(){
//         return `Jenis hewan adalah ${this._jenis}`;
//     }
//     set jenis(jenis) {
//         this._jenis = `${jenis} anak`
//     }
// }

// const Kucing = new Hewan('Kucing', 'Bapaklia');
// Kucing.jenis = 'Melahirkan'
// console.log(Kucing.jenis);


// LATIHAN 3 - KONSEP ABSTRAKSI, INHERITANCE, DAN POLYMORPHISM
// Abstraksi
// class Jumlah {
//     constructor(jumlah) {
//         this.jumlah = jumlah;
//     }
//     totalBiaya() {
//         return this.jumlah * 14000;
//     }

//     tampilBiaya() {
//         return this.totalBiaya();
//     }
// }

//     Penumpang = new Jumlah(4);
//     console.log(Penumpang.tampilBiaya());

//Inheritance
// class Vehicle {
//     constructor(licensePlate, manufacture) {
//         this.licensePlate = licensePlate;
//         this.manufacture = manufacture;
//     }
//     info() {
//         console.log(`Nomor kendaraan: ${this.licensePlate}`);
//         console.log(`Manufacture: ${this.manufacture}`)
//     }
//     parking() {
//         console.log(`Kendaraan ${this.licensePlate} harap bayar parkir`);
//     }
// }

// class Car extends Vehicle {
//     constructor(licensePlate, manufacture, wheels) {
//         super(licensePlate, manufacture);
//         this.wheels = wheels;
//     }
//     droveOff() {
//         console.log(`Kendaraan ${this.licensePlate} melaju!`);
//     }
//     openDoor() {
//         console.log('Buka Pintu!');
//     }
//     info() {
//         super.info();
//         console.log(`Jumlah roda: ${this.wheels}`)
//     }
// }

// const car = new Car ("DD123", 'Toyota', 10);
// car.info();

// POLYMORPHISM
class Transportasi {
    constructor(name) {
        this.name = name;
    }
    jalur() {
        console.log(`${this.name} pergi dengan transportasi darat`);
    }
}

class Persons extends Transportasi {
    constructor(name){
        super(name);
    }
    jalur() {
        console.log(`${this.name} pergi dengan transportasi udara`)
    }
}

const name = new Persons("Aditya");
name.jalur();