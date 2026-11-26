class Karyawan {
    constructor(nama) {
        this.nama = nama;
    }

    info() {
        console.log("Karyawan: " + this.nama);
    }
}

class KaryawanTetap extends Karyawan {
    hitungLembur(jam) {
        let upah = jam * 50000;
        console.log(this.nama + " lembur " + jam +
            " jam, upah Rp " + upah + ".");
    }
}

class KaryawanMagang extends Karyawan {
    terimaUangSaku(nominal) {
        console.log(this.nama +
            " menerima uang saku Rp " + nominal + ".");
    }
}

class Programmer extends KaryawanTetap {
}

class Magang extends KaryawanMagang {
}

class Desainer extends KaryawanTetap {
}

function prosesLembur(daftar) {
    daftar.forEach((x) => x.hitungLembur(3));
}

function berikanUangSaku(daftar) {
    daftar.forEach((x) => x.terimaUangSaku(150000));
}

const budi = new Programmer("Budi_XXXX");
const rina = new Magang("Rina_XXXX");
const sari = new Desainer("Sari_XXXX");

budi.info();
rina.info();
sari.info();

prosesLembur([budi, sari]);

berikanUangSaku([rina]);