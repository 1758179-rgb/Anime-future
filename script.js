// script.js

// Sample anime data
const animeData = [
    { title: 'Attack on Titan', genre: ['Action', 'Drama', 'Fantasy'], rating: 9.3 },
    { title: 'Demon Slayer', genre: ['Action', 'Adventure', 'Fantasy'], rating: 8.7 },
    { title: 'Death Note', genre: ['Mystery', 'Psychological', 'Thriller'], rating: 9.0 },
    { title: 'My Hero Academia', genre: ['Action', 'School', 'Superhero'], rating: 8.5 },
    { title: 'One Piece', genre: ['Action', 'Adventure', 'Fantasy'], rating: 8.6 },
    { title: 'Naruto', genre: ['Action', 'Adventure', 'Fantasy'], rating: 8.3 },
    { title: 'Sword Art Online', genre: ['Action', 'Adventure', 'Fantasy'], rating: 7.7 },
];

// Function to filter anime by genre
function filterAnimeByGenre(selectedGenre) {
    return animeData.filter(anime => anime.genre.includes(selectedGenre));
}

// Function to display popular anime
function displayPopularAnime() {
    const popularAnime = animeData.sort((a, b) => b.rating - a.rating).slice(0, 5);
    popularAnime.forEach(anime => {
        console.log(`Title: ${anime.title}, Rating: ${anime.rating}`);
    });
}

// Example interactive feature: get user input for genre filtering
function getGenreInputAndDisplay() {
    const userGenre = prompt('Enter a genre to filter anime:');
    const filteredAnime = filterAnimeByGenre(userGenre);
    filteredAnime.forEach(anime => {
        console.log(`Title: ${anime.title}, Genre: ${anime.genre.join(', ')}`);
    });
}

// Display popular anime on load
displayPopularAnime();