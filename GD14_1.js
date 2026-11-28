const KeranjangBelanja = (function () {
    let instance;

    function init() {
        const items = [];

        const rupiah = (n) => "Rp" + n.toLocaleString("id-ID");

        return {
            tambah(nama, harga, jumlah = 1) {
                const item = items.find(item => item.nama === nama);

                if (item) {
                    item.jumlah += jumlah;
                } else {
                    items.push({ nama, harga, jumlah });
                }
            },

            hapus(nama) {
                const index = items.findIndex(item => item.nama === nama);

                if (index !== -1) {
                    items.splice(index, 1);
                    return true;
                }

                return false;
            },

            total() {
                return items.reduce((sum, item) => {
                    return sum + (item.harga * item.jumlah);
                }, 0);
            },

            tampilkan() {
                items.forEach(item => {
                    const subtotal = item.harga * item.jumlah;

                    console.log(
                        `- ${item.nama} x${item.jumlah} = ${rupiah(subtotal)}`
                    );
                });

                console.log(`Total: ${rupiah(this.total())}`);
            }
        };
    }

    return {
        getInstance() {
            if (!instance) {
                instance = init();
            }

            return instance;
        }
    };
})();

const k1 = KeranjangBelanja.getInstance();
k1.tambah("Buku", 50000, 2);
k1.tambah("Pulpen", 5000, 3);

const k2 = KeranjangBelanja.getInstance();
k2.tambah("Buku", 50000, 1);

console.log("Keranjang sama?", k1 === k2);
k2.tampilkan();
console.log("Hapus Pulpen:", k1.hapus("Pulpen"));
console.log("Hapus Pensil:", k1.hapus("Pensil"));
k1.tampilkan();