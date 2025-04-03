document.addEventListener('DOMContentLoaded', function () {
    const balloonContainer = document.querySelector('.balloon-container');
    
    // Fungsi untuk membuat balon
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        
        // Menetapkan posisi acak untuk balon
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.animationDuration = `${Math.random() * 5 + 5}s`; // Durasi acak antara 5 sampai 10 detik
        
        // Menambahkan balon ke container
        balloonContainer.appendChild(balloon);

        // Hapus balon setelah animasi selesai
        balloon.addEventListener('animationend', function() {
            balloon.remove();
        });
    }

    // Membuat balon setiap 1 detik
    setInterval(createBalloon, 1000);
});
