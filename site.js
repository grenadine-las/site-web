
const albums = [
    {
        titre: "H24",
        artiste: "Hamza",
        cover: "album_du_moment/Hamza_H24.jpg"
    },
    {
        titre: "Fugue",
        artiste: "2L",
        cover: "album_du_moment/2L_Fugue.jpg"
    }
];

// choix aléatoire
const album = albums[Math.floor(Math.random() * albums.length)];

// injection dans la page
document.getElementById("album-cover").src = album.cover;
document.getElementById("album-cover").alt = "Pochette de " + album.titre;

document.getElementById("album-titre").textContent = album.titre;
document.getElementById("album-artiste").textContent = album.artiste;
