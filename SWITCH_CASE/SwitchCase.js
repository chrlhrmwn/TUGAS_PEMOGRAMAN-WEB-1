function cekHari(){
    let hari = parseInt(document.getElementById("hari").value);
    let hasil;

    switch(hari){
        case 1:
            hasil = "Senin - Pemrograman Web";
            break;
        case 2:
            hasil = "Selasa - Basis Data";
            break;
        case 3:
            hasil = "Rabu - Jaringan Komputer";
            break;
        case 4:
            hasil = "Kamis - Sistem Operasi";
            break;
        case 5:
            hasil = "Jumat - Kecerdasan Buatan";
            break;
        case 6:
            hasil = "Sabtu - Praktikum";
            break;
        case 7:
            hasil = "Minggu - Libur";
            break;
        default:
            hasil = "Input harus 1 - 7";
    }

    document.getElementById("hasil").innerHTML = hasil;
}