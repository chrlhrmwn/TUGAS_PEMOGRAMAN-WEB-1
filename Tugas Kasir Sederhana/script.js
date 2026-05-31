function hitungBelanja(){

    let harga = parseInt(document.getElementById("harga").value);
    let jumlah = parseInt(document.getElementById("jumlah").value);

    if(isNaN(harga) || isNaN(jumlah)){

        alert("Masukkan data terlebih dahulu!");
        return;
    }

    let total = harga * jumlah;

    let diskonPersen = 0;

    if(total >= 500000){

        diskonPersen = 15;

    }else if(total >= 200000){

        diskonPersen = 10;

    }else if(total >= 100000){

        diskonPersen = 5;
    }

    let diskon = total * diskonPersen / 100;

    let bayar = total - diskon;

    document.getElementById("totalBelanja").innerHTML =
    "Rp " + total.toLocaleString("id-ID");

    document.getElementById("diskon").innerHTML =
    "Rp " + diskon.toLocaleString("id-ID");

    document.getElementById("bayar").innerHTML =
    "Rp " + bayar.toLocaleString("id-ID");

    document.getElementById("totalBayar").innerHTML =
    "Rp " + bayar.toLocaleString("id-ID");
}

function resetForm(){

    document.getElementById("harga").value = "";
    document.getElementById("jumlah").value = "";

    document.getElementById("totalBelanja").innerHTML = "Rp 0";
    document.getElementById("diskon").innerHTML = "Rp 0";
    document.getElementById("bayar").innerHTML = "Rp 0";
    document.getElementById("totalBayar").innerHTML = "Rp 0";
}