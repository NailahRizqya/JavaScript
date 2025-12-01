function hitungKurs() {
   
    let inputRupiah = document.getElementById("jumlah_rupiah").value;
    
    let rupiah = parseFloat(inputRupiah);

    if (isNaN(rupiah) || rupiah < 0) {
        alert("Mohon masukkan jumlah Rupiah yang valid (angka positif).");
        document.getElementById("hasil_dollar").innerHTML = "";
        return; 
    }

    const KURS_DOLLAR = 14650; // 1 Dollar = 14.650 Rupiah 

    let dollar = rupiah / KURS_DOLLAR;

    document.getElementById("hasil_dollar").innerHTML = dollar.toFixed(2);

    console.log("Input Rupiah: " + rupiah);
    console.log("Hasil Dollar: " + dollar.toFixed(2));
}