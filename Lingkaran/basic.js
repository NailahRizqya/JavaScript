function hitungLingkaran() {
    
    let inputJariJari = document.getElementById("jari_jari").value;

    let r = parseFloat(inputJariJari);
    
    if (isNaN(r) || r <= 0) {
        alert("Mohon masukkan nilai jari-jari yang valid (angka positif).");
        document.getElementById("hasil_luas").innerHTML = "";
        document.getElementById("hasil_keliling").innerHTML = "";
        return; // Hentikan fungsi jika input tidak valid
    }

    const PI = Math.PI;

    let luas = PI * r * r; 
    
    let keliling = 2 * PI * r;

    document.getElementById("hasil_luas").innerHTML = luas.toFixed(2);
    document.getElementById("hasil_keliling").innerHTML = keliling.toFixed(2);
}