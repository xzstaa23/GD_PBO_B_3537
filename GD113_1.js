const kamera = {
    ambilFoto() {
        console.log(this.nama + " mengambil foto.");
    }
};

const internet = {
    bukaBrowser() {
        console.log(this.nama + " membuka browser.");
    }
};

const telepon = {
    panggil() {
        console.log(this.nama + " melakukan panggilan.");
    }
};

function applyCapabilities(Kelas, ...kemampuan) {
    kemampuan.forEach((fitur) => {
        Object.assign(Kelas.prototype, fitur);
    });
}

class TabletWifi {
    constructor(nama) {
        this.nama = nama;
    }
}

class PonselJadul {
    constructor(nama) {
        this.nama = nama;
    }
}

applyCapabilities(TabletWifi, kamera, internet);
applyCapabilities(PonselJadul, telepon);

const tablet = new TabletWifi("Tablet_XXXX");
const ponsel = new PonselJadul("Ponsel_XXXX");

tablet.ambilFoto();
tablet.bukaBrowser();
ponsel.panggil();

console.log(
    "Ponsel_XXXX bisa mengambil foto? " +
    (typeof ponsel.ambilFoto === "function")
);

console.log(
    "Tablet_XXXX bisa melakukan panggilan? " +
    (typeof tablet.panggil === "function")
);