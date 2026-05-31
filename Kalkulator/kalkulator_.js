function hitung(operator){

    let angka1 =
    parseFloat(document.getElementById("angka1").value);

    let angka2 =
    parseFloat(document.getElementById("angka2").value);

    if(isNaN(angka1) || isNaN(angka2)){
        alert("Masukkan kedua angka terlebih dahulu!");
        return;
    }

    let hasil;

    switch(operator){

        case "+":
            hasil = angka1 + angka2;
            break;

        case "-":
            hasil = angka1 - angka2;
            break;

        case "*":
            hasil = angka1 * angka2;
            break;

        case "/":

            if(angka2 === 0){
                hasil = "Tidak bisa dibagi 0";
            }else{
                hasil = angka1 / angka2;
            }

            break;

        case "%":
            hasil = angka1 % angka2;
            break;
    }

    document.getElementById("hasil").innerHTML =
    "Hasil: " + hasil;

    tambahRiwayat(
        angka1 + " " +
        operator + " " +
        angka2 + " = " +
        hasil
    );
}

function tambahRiwayat(teks){

    let list =
    document.getElementById("historyList");

    let item =
    document.createElement("li");

    item.textContent = teks;

    list.prepend(item);
}

function resetKalkulator(){

    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";

    document.getElementById("hasil").innerHTML =
    "Hasil: 0";

    document.getElementById("historyList").innerHTML =
    "";
}