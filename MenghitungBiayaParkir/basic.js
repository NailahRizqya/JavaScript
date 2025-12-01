function hitungBiayaParkir() {
    let inputMasuk = document.getElementById("jam_masuk").value;
    let inputKeluar = document.getElementById("jam_keluar").value;
    
    let jamMasuk = parseInt(inputMasuk);
    let jamKeluar = parseInt(inputKeluar);
  
    if (isNaN(jamMasuk) || isNaN(jamKeluar) || jamMasuk < 0 || jamKeluar < 0) {
        alert("Mohon masukkan jam masuk/keluar yang valid.");
        return;
    }
    
    let lamaParkir;
    if (jamKeluar >= jamMasuk) {
        lamaParkir = jamKeluar - jamMasuk;
    } else {
        // jika melewati tengah malam (misal 23:00 sampai 01:00)
        lamaParkir = (24 - jamMasuk) + jamKeluar;
    }
    
    lamaParkir = Math.ceil(lamaParkir);

    const TARIF_2_JAM_PERTAMA = 3000;
    const TARIF_PER_JAM_BERIKUTNYA = 1000;
    
    let totalBiaya = 0;

    if (lamaParkir <= 2) {
        totalBiaya = TARIF_2_JAM_PERTAMA;
        console.log(`Lama Parkir (${lamaParkir} jam) <= 2 jam. Biaya: ${totalBiaya}`);
    } else {
        
        totalBiaya = TARIF_2_JAM_PERTAMA; 
        
        let jamTambahan = lamaParkir - 2;
        
        // biaya jam berikutnya
        let biayaTambahan = jamTambahan * TARIF_PER_JAM_BERIKUTNYA;
        totalBiaya += biayaTambahan;

        console.log(`Lama Parkir (${lamaParkir} jam) > 2 jam.`);
        console.log(`Biaya Dasar: 3000. Jam Tambahan: ${jamTambahan}. Biaya Tambahan: ${biayaTambahan}`);
    }

    document.getElementById("lama_parkir").innerHTML = `${lamaParkir} Jam`;
    
    document.getElementById("total_biaya").innerHTML = totalBiaya.toLocaleString('id-ID');
}