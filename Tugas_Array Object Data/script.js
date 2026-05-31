let mahasiswa = [];

let indexEdit = -1;

function tambahMahasiswa() {

    let nim = document.getElementById("nim").value;
    let nama = document.getElementById("nama").value;
    let jurusan = document.getElementById("jurusan").value;
    let fakultas = document.getElementById("fakultas").value;

    if(
        nim === "" ||
        nama === "" ||
        jurusan === "" ||
        fakultas === ""
    ){
        alert("Semua data harus diisi!");
        return;
    }

    let data = {
        nim: nim,
        nama: nama,
        jurusan: jurusan,
        fakultas: fakultas
    };

    mahasiswa.push(data);

    tampilData();

    resetForm();
}

function tampilData(){

    let tabel = document.getElementById("tabelMahasiswa");

    tabel.innerHTML = "";

    mahasiswa.forEach((mhs,index)=>{

        tabel.innerHTML += `
        <tr>
            <td>${index+1}</td>
            <td>${mhs.nim}</td>
            <td>${mhs.nama}</td>
            <td>${mhs.jurusan}</td>
            <td>${mhs.fakultas}</td>

            <td>
                <button
                class="action-btn edit"
                onclick="editMahasiswa(${index})">
                Edit
                </button>

                <button
                class="action-btn hapus"
                onclick="hapusMahasiswa(${index})">
                Hapus
                </button>
            </td>
        </tr>
        `;
    });

}

function editMahasiswa(index){

    document.getElementById("nim").value =
    mahasiswa[index].nim;

    document.getElementById("nama").value =
    mahasiswa[index].nama;

    document.getElementById("jurusan").value =
    mahasiswa[index].jurusan;

    document.getElementById("fakultas").value =
    mahasiswa[index].fakultas;

    indexEdit = index;
}

function updateMahasiswa(){

    if(indexEdit === -1){
        alert("Pilih data yang akan diedit!");
        return;
    }

    mahasiswa[indexEdit] = {

        nim: document.getElementById("nim").value,
        nama: document.getElementById("nama").value,
        jurusan: document.getElementById("jurusan").value,
        fakultas: document.getElementById("fakultas").value

    };

    tampilData();

    resetForm();

    indexEdit = -1;
}

function hapusMahasiswa(index){

    if(confirm("Yakin ingin menghapus data?")){

        mahasiswa.splice(index,1);

        tampilData();
    }

}

function resetForm(){

    document.getElementById("nim").value = "";
    document.getElementById("nama").value = "";
    document.getElementById("jurusan").value = "";
    document.getElementById("fakultas").value = "";

}