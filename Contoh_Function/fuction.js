// no parameter
function salam(){
    alert("Selamat Belajar JavaScript");
}

// return value
function tambah(x,y){
    return x + y;
}

// parameter + return
function hitung(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);

    let hasil = tambah(a,b);

    document.getElementById("hasil").innerHTML =
    "Hasil Penjumlahan = " + hasil;
}