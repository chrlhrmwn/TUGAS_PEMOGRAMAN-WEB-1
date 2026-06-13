class Hewan {
    constructor(nama) {
        this.nama = nama;
    }

    suara() {
        console.log(`${this.nama} mengeluarkan suara`);
    }
}

class Kucing extends Hewan {
    suara() {
        console.log(`${this.nama} mengeong: Meow!`);
    }
}

class Anjing extends Hewan {
    suara() {
        console.log(`${this.nama} menggonggong: Woof!`);
    }
}

const kucing1 = new Kucing("Kitty");
const anjing1 = new Anjing("Buddy");

kucing1.suara();
anjing1.suara();