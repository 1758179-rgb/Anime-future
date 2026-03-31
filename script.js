// Comprehensive Anime Database with 14+ titles
const animeDatabase = [
    {
        id: 1,
        title: 'Attack on Titan',
        episodes: 75,
        year: 2013,
        rating: 9.3,
        genres: ['Action', 'Drama', 'Fantasy'],
        emoji: '⚔️',
        studio: 'WIT Studio'
    },
    {
        id: 2,
        title: 'My Hero Academia',
        episodes: 88,
        year: 2016,
        rating: 8.3,
        genres: ['Action', 'Superhero', 'School'],
        emoji: '🦸',
        studio: 'Bones'
    },
    {
        id: 3,
        title: 'Demon Slayer',
        episodes: 26,
        year: 2019,
        rating: 8.6,
        genres: ['Action', 'Adventure', 'Fantasy'],
        emoji: '😈',
        studio: 'ufotable'
    },
    {
        id: 4,
        title: 'Death Note',
        episodes: 37,
        year: 2006,
        rating: 9.0,
        genres: ['Mystery', 'Psychological', 'Thriller'],
        emoji: '📔',
        studio: 'Madhouse'
    },
    {
        id: 5,
        title: 'One Piece',
        episodes: 1000,
        year: 1999,
        rating: 8.7,
        genres: ['Action', 'Adventure', 'Comedy'],
        emoji: '🏴‍☠️',
        studio: 'Toei Animation'
    },
    {
        id: 6,
        title: 'Sword Art Online',
        episodes: 49,
        year: 2012,
        rating: 7.6,
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        emoji: '🎮',
        studio: 'A-1 Pictures'
    },
    {
        id: 7,
        title: 'Naruto',
        episodes: 220,
        year: 2002,
        rating: 8.3,
        genres: ['Action', 'Adventure', 'Fantasy'],
        emoji: '👨‍🦰',
        studio: 'Studio Pierrot'
    },
    {
        id: 8,
        title: 'Fullmetal Alchemist: Brotherhood',
        episodes: 64,
        year: 2009,
        rating: 9.2,
        genres: ['Action', 'Adventure', 'Fantasy'],
        emoji: '🔑',
        studio: 'Bones'
    },
    {
        id: 9,
        title: 'Hunter x Hunter',
        episodes: 148,
        year: 2011,
        rating: 9.0,
        genres: ['Action', 'Adventure', 'Fantasy'],
        emoji: '🐉',
        studio: 'Madhouse'
    },
    {
        id: 10,
        title: 'Neon Genesis Evangelion',
        episodes: 26,
        year: 1995,
        rating: 8.4,
        genres: ['Mecha', 'Psychological', 'Drama'],
        emoji: '🤖',
        studio: 'Gainax'
    },
    {
        id: 11,
        title: 'Your Name',
        episodes: 1,
        year: 2016,
        rating: 8.9,
        genres: ['Romance', 'Drama', 'Fantasy'],
        emoji: '💫',
        studio: 'CoMix Wave Films'
    },
    {
        id: 12,
        title: 'Spirited Away',
        episodes: 1,
        year: 2001,
        rating: 8.6,
        genres: ['Adventure', 'Fantasy', 'Family'],
        emoji: '🏯',
        studio: 'Studio Ghibli'
    },
    {
        id: 13,
        title: 'Tokyo Ghoul',
        episodes: 24,
        year: 2014,
        rating: 7.9,
        genres: ['Action', 'Horror', 'Supernatural'],
        emoji: '👹',
        studio: 'Studio Pierrot'
    },
    {
        id: 14,
        title: 'One Punch Man',
        episodes: 24,
        year: 2015,
        rating: 8.8,
        genres: ['Action', 'Comedy', 'Superhero'],
        emoji: '👊',
        studio: 'Madhouse'
    },
    {
        id: 15,
        title: 'Jujutsu Kaisen',
        episodes: 27,
        year: 2020,
        rating: 8.9,
        genres: ['Action', 'Dark', 'Supernatural'],
        emoji: '💜',
        studio: 'MAPPA'
    }
];

// Display anime cards
function displayAnimeCards(animeList) {
    const container = document.getElementById('anime-container');
    container.innerHTML = '';
    
    animeList.forEach(anime => {
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.innerHTML = `
            <div class="anime-card-header">
                <h3>${anime.emoji} ${anime.title}</h3>
            </div>
            <div class="anime-card-body">
                <p><strong>Episodes:</strong> ${anime.episodes}</p>
                <p><strong>Year:</strong> ${anime.year}</p>
                <p><strong>Rating:</strong> ${'⭐'.repeat(Math.floor(anime.rating / 2))} ${anime.rating}/10</p>
                <p><strong>Studio:</strong> ${anime.studio}</p>
                <div class="genres">
                    ${anime.genres.map(g => `<span class="genre-tag">${g}</span>`).join('')}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Filter by genre
function filterByGenre(genre) {
    if (genre === 'All') {
        displayAnimeCards(animeDatabase);
    } else {
        const filteredAnime = animeDatabase.filter(anime => anime.genres.includes(genre));
        displayAnimeCards(filteredAnime);
    }
}

// Search functionality
function searchAnime(query) {
    const filtered = animeDatabase.filter(anime =>
        anime.title.toLowerCase().includes(query.toLowerCase())
    );
    displayAnimeCards(filtered);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Display all anime on page load
    displayAnimeCards(animeDatabase);

    // Genre filter
    const genreFilter = document.getElementById('genre-filter');
    if (genreFilter) {
        genreFilter.addEventListener('change', (e) => {
            filterByGenre(e.target.value);
        });
    }

    // Search input
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchAnime(e.target.value);
        });
    }

    // Form submission
    const animeForm = document.getElementById('anime-form');
    if (animeForm) {
        animeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your feedback!');
            animeForm.reset();
        });
    }
});