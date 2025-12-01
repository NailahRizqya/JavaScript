function hitungJumlah() {
    let nilai1 = document.getElementById("bil1").value;
    let nilai2 = document.getElementById("bil2").value;
    
    let bil1 = parseFloat(nilai1);
    let bil2 = parseFloat(nilai2);

    if (isNaN(bil1) || isNaN(bil2)) {
        document.getElementById("hasil").value = "Error";
        console.log("Input harus berupa angka!");
        return;
    }

    let total = bil1 + bil2;

    document.getElementById("hasil").value = total;
}

hitungJumlah();