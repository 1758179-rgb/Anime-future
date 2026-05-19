// Comprehensive Anime Database with Premium Quality Titles + Images
const animeDatabase = [
    {
        id: 1,
        title: 'Attack on Titan',
        emoji: '⚔️',
        episodes: 75,
        year: 2013,
        rating: 9.3,
        genres: ['Action', 'Drama', 'Fantasy'],
        studio: 'WIT Studio / MAPPA',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad1%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%236c5ce7;stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%238e44ad;stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22400%22 fill=%22url(%23grad1)%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%22100%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22white%22%3E⚔️%3C/text%3E%3Ctext x=%2250%25%22 y=%2285%25%22 font-size=%2230%22 text-anchor=%22middle%22 fill=%22white%22%3EAttack on Titan%3C/text%3E%3C/svg%3E',
        description: 'In a world where giant humanoid Titans roam and destroy cities, humanity has built enormous walls to protect themselves. Follow Eren Yeager and his friends as they join the military to fight back against the Titans and uncover the truth about their world.'
    },
    {
        id: 2,
        title: 'Fullmetal Alchemist: Brotherhood',
        emoji: '🔑',
        episodes: 64,
        year: 2009,
        rating: 9.2,
        genres: ['Action', 'Adventure', 'Fantasy'],
        studio: 'Bones',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad2%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23f39c12;stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23e67e22;stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22400%22 fill=%22url(%23grad2)%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%22100%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22white%22%3E🔑%3C/text%3E%3Ctext x=%2250%25%22 y=%2280%25%22 font-size=%2225%22 text-anchor=%22middle%22 fill=%22white%22%3EFullmetal Alchemist%3C/text%3E%3Ctext x=%2250%25%22 y=%2290%25%22 font-size=%2225%22 text-anchor=%22middle%22 fill=%22white%22%3EBrotherhood%3C/text%3E%3C/svg%3E',
        description: 'Two brothers, Edward and Alphonse Elric, attempt to resurrect their mother through forbidden alchemy, leading to tragic consequences. Join them on their journey to find the Philosopher\'s Stone and restore their bodies.'
    },
    {
        id: 3,
        title: 'Hunter x Hunter',
        emoji: '🐉',
        episodes: 148,
        year: 2011,
        rating: 9.0,
        genres: ['Action', 'Adventure', 'Fantasy'],
        studio: 'Madhouse',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad3%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%2327ae60;stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%232ecc71;stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22400%22 fill=%22url(%23grad3)%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%22100%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22white%22%3E🐉%3C/text%3E%3Ctext x=%2250%25%22 y=%2285%25%22 font-size=%2230%22 text-anchor=%22middle%22 fill=%22white%22%3EHunter x Hunter%3C/text%3E%3C/svg%3E',
        description: 'Gon Freecss dreams of becoming a Hunter to find his father. Join him and his friends on an exciting adventure filled with challenges, growth, and unforgettable moments.'
    },
    {
        id: 4,
        title: 'Death Note',
        emoji: '📔',
        episodes: 37,
        year: 2006,
        rating: 9.0,
        genres: ['Mystery', 'Psychological', 'Thriller'],
        studio: 'Madhouse',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad4%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23000;stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23222;stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22400%22 fill=%22url(%23grad4)%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%22100%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22white%22%3E📔%3C/text%3E%3Ctext x=%2250%25%22 y=%2285%25%22 font-size=%2230%22 text-anchor=%22middle%22 fill=%22white%22%3EDeath Note%3C/text%3E%3C/svg%3E',
        description: 'A high school student finds a supernatural notebook that grants the power to kill anyone. Watch the intense psychological battle between Light Yagami and L as they clash over justice and morality.'
    },
    {
        id: 5,
        title: 'Demon Slayer',
        emoji: '😈',
        episodes: 26,
        year: 2019,
        rating: 8.6,
        genres: ['Action', 'Adventure', 'Fantasy'],
        studio: 'ufotable',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad5%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23e74c3c;stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23c0392b;stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22400%22 fill=%22url(%23grad5)%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%22100%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22white%22%3E😈%3C/text%3E%3Ctext x=%2250%25%22 y=%2285%25%22 font-size=%2230%22 text-anchor=%22middle%22 fill=%22white%22%3EDemon Slayer%3C/text%3E%3C/svg%3E',
        description: 'Tanjiro\'s sister is turned into a demon, and he sets out to find a cure for her. Experience breathtaking animation and emotional storytelling in this epic tale of determination and brotherhood.'
    },
    {
        id: 6,
        title: 'Jujutsu Kaisen',
        emoji: '💜',
        episodes: 47,
        year: 2020,
        rating: 8.9,
        genres: ['Action', 'Dark', 'Supernatural'],
        studio: 'MAPPA',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad6%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%239b59b6;stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%238e44ad;stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22400%22 fill=%22url(%23grad6)%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%22100%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22white%22%3E💜%3C/text%3E%3Ctext x=%2250%25%22 y=%2285%25%22 font-size=%2230%22 text-anchor=%22middle%22 fill=%22white%22%3EJujutsu Kaisen%3C/text%3E%3C/svg%3E',
        description: 'A high schooler swallows a cursed finger and becomes possessed by a powerful demon. He joins a secret jujutsu society to fight curses and find the parts of a curse that can destroy the world.'
    },
    {
        id: 7,
        title: 'Neon Genesis Evangelion',
        emoji: '🤖',
        episodes: 26,
        year: 1995,
        rating: 8.4,
        genres: ['Mecha', 'Psychological', 'Drama'],
        studio: 'Gainax',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad7%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%233498db;stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%232980b9;stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22400%22 fill=%22url(%23grad7)%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%22100%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22white%22%3E🤖%3C/text%3E%3Ctext x=%2250%25%22 y=%2280%25%22 font-size=%2225%22 text-anchor=%22middle%22 fill=%22white%22%3ENeon Genesis%3C/text%3E%3Ctext x=%2250%25%22 y=%2290%25%22 font-size=%2225%22 text-anchor=%22middle%22 fill=%22white%22%3EEvangelion%3C/text%3E%3C/svg%3E',
        description: 'A groundbreaking anime about teenage pilots who must fight giant angels to protect humanity. Dive into a complex narrative exploring identity, purpose, and human connection.'
    },
    {
        id: 8,
        title: 'My Hero Academia',
        emoji: '🦸',
        episodes: 88,
        year: 2016,
        rating: 8.3,
        genres: ['Action', 'Superhero', 'School'],
        studio: 'Bones',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad8%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23e74c3c;stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23f39c12;stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22400%22 fill=%22url(%23grad8)%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%22100%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22white%22%3E🦸%3C/text%3E%3Ctext x=%2250%25%22 y=%2285%25%22 font-size=%2230%22 text-anchor=%22middle%22 fill=%22white%22%3EMy Hero Academia%3C/text%3E%3C/svg%3E',
        description: 'In a world where most people have superpowers (Quirks), one powerless boy dreams of becoming the greatest hero. Watch Deku\'s incredible journey at U.A. High School.'
    },
    {
        id: 9,
        title: 'One Punch Man',
        emoji: '👊',
        episodes: 24,
        year: 2015,
        rating: 8.8,
        genres: ['Action', 'Comedy', 'Superhero'],
        studio: 'Madhouse',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad9%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23f1c40f;stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23f39c12;stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22400%22 fill=%22url(%23grad9)%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%22100%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22white%22%3E👊%3C/text%3E%3Ctext x=%2250%25%22 y=%2285%25%22 font-size=%2230%22 text-anchor=%22middle%22 fill=%22white%22%3EOne Punch Man%3C/text%3E%3C/svg%3E',
        description: 'An overpowered hero bored with his power fights monsters and searches for a worthy opponent. A hilarious yet action-packed series about strength, purpose, and friendship.'
    },
    {
        id: 10,
        title: 'Tokyo Ghoul',
        emoji: '👹',
        episodes: 24,
        year: 2014,
        rating: 7.9,
        genres: ['Action', 'Horror', 'Supernatural'],
        studio: 'Studio Pierrot',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad10%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23c0392b;stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23000;stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22400%22 fill=%22url(%23grad10)%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%22100%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22white%22%3E👹%3C/text%3E%3Ctext x=%2250%25%22 y=%2285%25%22 font-size=%2230%22 text-anchor=%22middle%22 fill=%22white%22%3ETokyo Ghoul%3C/text%3E%3C/svg%3E',
        description: 'A college student is transformed into a ghoul and must hide his nature while navigating a secret world of ghouls and humans. Dark, intense, and emotionally gripping.'
    },
    {
        id: 11,
        title: 'Steins;Gate',
        emoji: '⏰',
        episodes: 24,
        year: 2011,
        rating: 9.1,
        genres: ['Sci-Fi', 'Thriller', 'Drama'],
        studio: 'White Fox',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad11%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%2316a085;stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%231abc9c;stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22400%22 fill=%22url(%23grad11)%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%22100%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22white%22%3E⏰%3C/text%3E%3Ctext x=%2250%25%22 y=%2285%22 font-size=%2230%22 text-anchor=%22middle%22 fill=%22white%22%3ESteins;Gate%3C/text%3E%3C/svg%3E',
        description: 'A group of friends accidentally create a time machine and get caught in a conspiracy that threatens the world. An epic sci-fi thriller with incredible plot twists.'
    },
    {
        id: 12,
        title: 'Naruto Shippuden',
        emoji: '👨‍🦰',
        episodes: 500,
        year: 2007,
        rating: 8.3,
        genres: ['Action', 'Adventure', 'Fantasy'],
        studio: 'Studio Pierrot',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad12%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23e67e22;stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23d35400;stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22400%22 fill=%22url(%23grad12)%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%22100%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22white%22%3E👨‍🦰%3C/text%3E%3Ctext x=%2250%25%22 y=%2285%25%22 font-size=%2230%22 text-anchor=%22middle%22 fill=%22white%22%3ENaruto Shippuden%3C/text%3E%3C/svg%3E',
        description: 'Follow Naruto\'s epic journey as he grows stronger, builds friendships, and strives to become Hokage. A legendary series about growth, determination, and the power of bonds.'
    },
    {
        id: 13,
        title: 'Your Name',
        emoji: '💫',
        episodes: 1,
        year: 2016,
        rating: 8.9,
        genres: ['Romance', 'Drama', 'Fantasy'],
        studio: 'CoMix Wave Films',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad13%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23e91e63;stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23c2185b;stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22400%22 fill=%22url(%23grad13)%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%22100%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22white%22%3E💫%3C/text%3E%3Ctext x=%2250%25%22 y=%2285%25%22 font-size=%2230%22 text-anchor=%22middle%22 fill=%22white%22%3EYour Name%3C/text%3E%3C/svg%3E',
        description: 'Two strangers mysteriously swap bodies and must work together to save a town from disaster. A beautiful love story wrapped in a supernatural mystery.'
    },
    {
        id: 14,
        title: 'Sword Art Online',
        emoji: '🎮',
        episodes: 49,
        year: 2012,
        rating: 7.6,
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        studio: 'A-1 Pictures',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad14%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%2334495e;stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%232c3e50;stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22400%22 fill=%22url(%23grad14)%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%22100%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22white%22%3E🎮%3C/text%3E%3Ctext x=%2250%25%22 y=%2285%25%22 font-size=%2230%22 text-anchor=%22middle%22 fill=%22white%22%3ESword Art Online%3C/text%3E%3C/svg%3E',
        description: 'Players are trapped in a virtual reality MMORPG where death in the game means death in real life. An exciting adventure about survival, love, and overcoming challenges.'
    },
    {
        id: 15,
        title: 'Spirited Away',
        emoji: '🏯',
        episodes: 1,
        year: 2001,
        rating: 8.6,
        genres: ['Adventure', 'Fantasy', 'Family'],
        studio: 'Studio Ghibli',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad15%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%2316a085;stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%2327ae60;stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22400%22 fill=%22url(%23grad15)%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%22100%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22white%22%3E🏯%3C/text%3E%3Ctext x=%2250%25%22 y=%2285%25%22 font-size=%2230%22 text-anchor=%22middle%22 fill=%22white%22%3ESpirited Away%3C/text%3E%3C/svg%3E',
        description: 'A young girl enters a magical bathhouse and must work to rescue her parents. A stunning masterpiece filled with wonder, adventure, and unforgettable moments.'
    }
];

// Get all unique genres
function getAllGenres() {
    const genres = new Set();
    animeDatabase.forEach(anime => {
        anime.genres.forEach(genre => genres.add(genre));
    });
    return Array.from(genres).sort();
}

// Display anime cards with images
function displayAnimeCards(animeList) {
    const container = document.getElementById('animeGrid');
    container.innerHTML = '';
    
    if (animeList.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #b0b0b8; font-size: 1.2rem;">No anime found. Try a different search!</p>';
        return;
    }
    
    animeList.forEach(anime => {
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.innerHTML = `
            <div class="anime-card-image">
                <img src="${anime.image}" alt="${anime.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 400%22%3E%3Crect width=%22300%22 height=%22400%22 fill=%22%236c5ce7%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%22100%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22white%22%3E${anime.emoji}%3C/text%3E%3C/svg%3E'" />
            </div>
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
        card.addEventListener('click', () => showAnimeModal(anime));
        container.appendChild(card);
    });
}

// Display genre buttons
function displayGenres() {
    const genreList = document.getElementById('genreList');
    const genres = getAllGenres();
    
    genres.forEach(genre => {
        const count = animeDatabase.filter(anime => anime.genres.includes(genre)).length;
        const btn = document.createElement('button');
        btn.className = 'genre-btn';
        btn.textContent = `${genre} (${count})`;
        btn.addEventListener('click', () => filterByGenre(genre));
        genreList.appendChild(btn);
    });
}

// Filter by genre
function filterByGenre(genre) {
    const filtered = animeDatabase.filter(anime => anime.genres.includes(genre));
    displayAnimeCards(filtered);
}

// Show anime modal with image
function showAnimeModal(anime) {
    const modal = document.getElementById('animeModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${anime.image}" alt="${anime.title}" onerror="this.parentElement.innerHTML='${anime.emoji}'" />
        </div>
        <h2>${anime.emoji} ${anime.title}</h2>
        <p><strong>Episodes:</strong> ${anime.episodes}</p>
        <p><strong>Year:</strong> ${anime.year}</p>
        <p><strong>Rating:</strong> ${'⭐'.repeat(Math.floor(anime.rating / 2))} ${anime.rating}/10</p>
        <p><strong>Studio:</strong> ${anime.studio}</p>
        <p><strong>Genres:</strong> ${anime.genres.join(', ')}</p>
        <p><strong>Description:</strong></p>
        <p>${anime.description}</p>
    `;
    
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('animeModal').style.display = 'none';
}

// Search anime
function searchAnime(query) {
    if (query.trim() === '') {
        displayAnimeCards(animeDatabase);
        return;
    }
    
    const filtered = animeDatabase.filter(anime =>
        anime.title.toLowerCase().includes(query.toLowerCase()) ||
        anime.studio.toLowerCase().includes(query.toLowerCase()) ||
        anime.genres.some(g => g.toLowerCase().includes(query.toLowerCase())) ||
        anime.description.toLowerCase().includes(query.toLowerCase())
    );
    
    displayAnimeCards(filtered);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Display all anime on page load
    displayAnimeCards(animeDatabase);
    displayGenres();

    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchAnime(e.target.value);
        });
    }

    // Modal close button
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('animeModal');
        if (event.target === modal) {
            closeModal();
        }
    });
});