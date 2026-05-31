function cekNilai(){
    let nilai = parseInt(document.getElementById("nilai").value);
    let hasil = "";

    if(nilai >= 90){
        hasil = "Grade A (Sangat Baik)";
    }else if(nilai >= 80){
        hasil = "Grade B (Baik)";
    }else if(nilai >= 70){
        hasil = "Grade C (Cukup)";
    }else if(nilai >= 60){
        hasil = "Grade D (Kurang)";
    }else{
        hasil = "Grade E (Tidak Lulus)";
    }

    document.getElementById("hasil").innerHTML = hasil;
}