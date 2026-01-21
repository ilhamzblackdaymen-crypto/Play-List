// DATA LAGU ANDA
const mySongs = [
    {
        id: 1,
        title: "Project Lagu Pertama",
        artist: "Produksi 2026",
        videoUrl: "" // Pastikan file ada di folder video
    },
    {
        id: 2,
        title: "Draft Melodi Galau",
        artist: "Saya Sendiri",
        videoUrl: ""
    },
    {
        id: 3,
        title: "TULUS - Monokrom (Official Music Video)",
        artist: "Tulus",
        // Link YouTube SUDAH DIUBAH ke format /embed/ agar bisa muncul
        videoUrl: "https://www.youtube.com/embed/QqJ-Vp8mvbk?si=RkT1c84ooYMIUH5m" 
    }
];

const listSection = document.getElementById('list-section');
const playerSection = document.getElementById('player-section');
const playlistDiv = document.getElementById('playlist');
const mainVideo = document.getElementById('main-video');
const displayTitle = document.getElementById('display-title');
const displayArtist = document.getElementById('display-artist');

// Render daftar lagu ke halaman awal
function loadSongs() {
    playlistDiv.innerHTML = ""; // Bersihkan list
    mySongs.forEach(song => {
        const card = document.createElement('div');
        card.className = 'song-card';
        card.innerHTML = `
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
        `;
        card.onclick = () => openPlayer(song);
        playlistDiv.appendChild(card);
    });
}

// Fungsi pindah ke halaman player
function openPlayer(song) {
    listSection.classList.add('hidden');
    playerSection.classList.remove('hidden');
    
    displayTitle.innerText = song.title;
    displayArtist.innerText = song.artist;

    // Tambahkan parameter autoplay agar video langsung jalan
    let finalUrl = song.videoUrl;
    if (finalUrl.includes("youtube.com")) {
        finalUrl += "?autoplay=1&rel=0";
    }
    
    mainVideo.src = finalUrl;
}

// Fungsi kembali ke daftar
function goBack() {
    mainVideo.src = ""; // Matikan video saat kembali
    playerSection.classList.add('hidden');
    listSection.classList.remove('hidden');
}

// Jalankan saat aplikasi dibuka
loadSongs();
