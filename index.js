function tutarHesapla(yardim) {
    const ara = ['a', 'h', 'm', 'e', 't'];
    let sayac = 0;

    for (let i = 0; i < yardim.length; i++) {
        let isim = yardim[i].toLowerCase();

        for (let j = 0; j < isim.length; j++) {
            if (ara.includes(isim[j])) {
                sayac++;
            }
        }
    }
    return sayac * 1000;
}

const yardimYapanlar = [
    'ahmet zorlu',
    'emre şahiner',
    'tuğrul türkkan',
    'tunca özdemir',
    'fatih aydın',
];
tutarHesapla(yardimYapanlar);
/* Bu satırdan sonraki satırları silmeyin! */
module.exports = tutarHesapla;
