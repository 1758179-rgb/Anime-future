const animeDatabase = [
  {
    id: 1,
    title: 'Attack on Titan',
    year: 2013,
    rating: 9.3,
    episodes: 75,
    studio: 'WIT Studio / MAPPA',
    genres: ['Action', 'Drama', 'Fantasy'],
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
    description: 'Humanity stands behind towering walls while colossal titans threaten the remaining peace. Eren and his friends make the terrifying choice to fight back.'
  },
  {
    id: 2,
    title: 'Fullmetal Alchemist: Brotherhood',
    year: 2009,
    rating: 9.2,
    episodes: 64,
    studio: 'Bones',
    genres: ['Action', 'Adventure', 'Fantasy'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
    description: 'Two brothers seek the Philosopher’s Stone after a failed attempt to bring their mother back to life. Their journey becomes a search for identity and redemption.'
  },
  {
    id: 3,
    title: 'Hunter x Hunter',
    year: 2011,
    rating: 9.0,
    episodes: 148,
    studio: 'Madhouse',
    genres: ['Action', 'Adventure', 'Fantasy'],
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    description: 'Gon Freecss sets out to find his father and become a Hunter, entering a vast world full of danger, mystery, and growth.'
  },
  {
    id: 4,
    title: 'Death Note',
    year: 2006,
    rating: 9.0,
    episodes: 37,
    studio: 'Madhouse',
    genres: ['Mystery', 'Psychological', 'Thriller'],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    description: 'Light Yagami finds a notebook that can kill anyone whose name is written within it. A mind game between a genius and a detective begins.'
  },
  {
    id: 5,
    title: 'Demon Slayer',
    year: 2019,
    rating: 8.6,
    episodes: 26,
    studio: 'ufotable',
    genres: ['Action', 'Adventure', 'Fantasy'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
    description: 'Tanjiro enters a brutal world of demons and swordsmanship to save his sister and destroy the source of the curse.'
  },
  {
    id: 6,
    title: 'Jujutsu Kaisen',
    year: 2020,
    rating: 8.9,
    episodes: 47,
    studio: 'MAPPA',
    genres: ['Action', 'Dark', 'Supernatural'],
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=900&q=80',
    description: 'A cursed teenager joins a secret coliseum of sorcerers as he learns to battle monsters, heartbreak, and deadly power.'
  },
  {
    id: 7,
    title: 'Neon Genesis Evangelion',
    year: 1995,
    rating: 8.4,
    episodes: 26,
    studio: 'Gainax',
    genres: ['Mecha', 'Psychological', 'Drama'],
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80',
    description: 'The human race fights giant angels with teenage pilots and questions what it means to be alive as the stories dive into identity and trauma.'
  },
  {
    id: 8,
    title: 'My Hero Academia',
    year: 2016,
    rating: 8.3,
    episodes: 88,
    studio: 'Bones',
    genres: ['Action', 'Superhero', 'School'],
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    description: 'In a world full of heroes, one powerless boy dreams of becoming the strongest protector of them all.'
  },
  {
    id: 9,
    title: 'One Punch Man',
    year: 2015,
    rating: 8.8,
    episodes: 24,
    studio: 'Madhouse',
    genres: ['Action', 'Comedy', 'Superhero'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
    description: 'A hero with unbeatable power is bored by the constant victories and searches for a worthy rival in a city full of monsters.'
  },
  {
    id: 10,
    title: 'Tokyo Ghoul',
    year: 2014,
    rating: 7.9,
    episodes: 24,
    studio: 'Studio Pierrot',
    genres: ['Action', 'Horror', 'Supernatural'],
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
    description: 'A shy college student becomes a ghoul and is forced to survive among a hidden world of monsters and morally gray choices.'
  },
  {
    id: 11,
    title: 'Steins;Gate',
    year: 2011,
    rating: 9.1,
    episodes: 24,
    studio: 'White Fox',
    genres: ['Sci-Fi', 'Thriller', 'Drama'],
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80',
    description: 'A time-travel experiment sends a group of friends into a labyrinth of altered timelines and devastating consequences.'
  },
  {
    id: 12,
    title: 'Naruto Shippuden',
    year: 2007,
    rating: 8.3,
    episodes: 500,
    studio: 'Studio Pierrot',
    genres: ['Action', 'Adventure', 'Fantasy'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
    description: 'Naruto continues his journey to become Hokage, growing stronger while carrying the weight of his past and friendships.'
  },
  {
    id: 13,
    title: 'Your Name',
    year: 2016,
    rating: 8.9,
    episodes: 1,
    studio: 'CoMix Wave Films',
    genres: ['Romance', 'Drama', 'Fantasy'],
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
    description: 'Two teens inexplicably swap bodies and must unravel a mystery tied to a town and a cosmic event that changes everything.'
  },
  {
    id: 14,
    title: 'Sword Art Online',
    year: 2012,
    rating: 7.6,
    episodes: 49,
    studio: 'A-1 Pictures',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    description: 'Players are trapped inside a deadly virtual world where losing means death in the real world. The fight for survival begins.'
  },
  {
    id: 15,
    title: 'Spirited Away',
    year: 2001,
    rating: 8.6,
    episodes: 1,
    studio: 'Studio Ghibli',
    genres: ['Adventure', 'Fantasy', 'Family'],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    description: 'A young girl finds herself in a magical bathhouse spirit world and must free her parents while facing a surreal new reality.'
  },
  {
    id: 16,
    title: 'Bleach: Thousand-Year Blood War',
    year: 2024,
    rating: 9.9,
    episodes: 42,
    studio: 'Studio Pierrot',
    genres: ['Action', 'Adventure', 'Supernatural'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    description: 'Ichigo and the Soul Reapers face a century-long Quincy war that threatens the balance between the worlds of the living and the dead.'
  }
];

const episodeLinks = {
  16: [
    { number: 41, url: 'https://drive.google.com/file/d/16WKuep15ZwUTpCIZVM0A0hHvHuIbn7to/view?usp=sharing' },
    { number: 42, url: 'https://drive.google.com/file/d/1fLHjKIo_2o2DNEahVb9cRvKvDm6viccn/view?usp=sharing' }
  ]
};

const featuredAnime = animeDatabase[15];

const communityPosts = [
  {
    author: 'CyberKazu',
    title: 'Is David Martinez still alive in the neural net?',
    content: 'The ending of Edgerunners still feels like a bigger mystery every time I rewatch it. Could the digital consciousness still be alive somewhere in the network?',
    likes: 142,
    comments: 24
  },
  {
    author: 'MotokoFan99',
    title: 'Ghost in the Shell philosophical themes in 2077',
    content: 'The distinction between human memory and cybernetic identity gets blurrier every year. The whole concept feels more modern than ever.',
    likes: 89,
    comments: 12
  },
  {
    author: 'SoulReaperX',
    title: 'Bleach TYBW is the comeback we all needed',
    content: 'The choreography, emotions, and pacing are unreal. The Quincy war finally feels epic on a whole new level.',
    likes: 214,
    comments: 31
  }
];

const profileAnimeImages = [
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=500&q=80'
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let currentGenre = 'All';
let currentDay = 'Monday';
let selectedAnimeId = null;

function buildGenres() {
  const unique = [...new Set(animeDatabase.flatMap((anime) => anime.genres))].sort();
  const list = ['All', ...unique];
  const genreList = document.getElementById('genreList');
  genreList.innerHTML = list
    .map(
      (genre) => `
        <button class="chip ${genre === currentGenre ? 'active' : ''}" type="button" data-genre="${genre}">
          ${genre}
        </button>
      `
    )
    .join('');

  genreList.querySelectorAll('.chip').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentGenre = btn.dataset.genre;
      buildGenres();
      renderAnimeGrid();
    });
  });
}

function getFilteredAnime() {
  if (currentGenre === 'All') return animeDatabase;
  return animeDatabase.filter((anime) => anime.genres.includes(currentGenre));
}

function renderAnimeGrid() {
  const container = document.getElementById('animeGrid');
  const list = getFilteredAnime();

  container.innerHTML = list
    .map(
      (anime) => `
        <article class="anime-card" onclick="openAnimeModal(${anime.id})">
          <div class="anime-thumb">
            <img src="${anime.image}" alt="${anime.title}" />
            <span class="anime-badge">${anime.episodes} eps</span>
            <span class="anime-score">⭐ ${anime.rating}</span>
          </div>
          <div class="anime-card-body">
            <div class="tag-row">
              ${anime.genres.slice(0, 2).map((genre) => `<span>${genre}</span>`).join('')}
            </div>
            <h3 class="anime-title">${anime.title}</h3>
            <div class="anime-footer">
              <span>${anime.year}</span>
              <button class="watch-toggle" type="button" onclick="event.stopPropagation(); toggleWatchlist(${anime.id})">★</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function renderScheduleTabs() {
  const tabs = document.getElementById('scheduleTabs');
  tabs.innerHTML = days
    .map(
      (day) => `
        <button class="day-tab ${day === currentDay ? 'active' : ''}" type="button" data-day="${day}">
          ${day}
        </button>
      `
    )
    .join('');

  tabs.querySelectorAll('.day-tab').forEach((button) => {
    button.addEventListener('click', () => {
      currentDay = button.dataset.day;
      renderScheduleTabs();
      renderScheduleList();
    });
  });
}

function renderScheduleList() {
  const list = document.getElementById('scheduleList');
  const filtered = animeDatabase.filter((anime) => {
    const match = days[Math.floor(Math.random() * days.length)];
    return anime.title.includes('Bleach') || anime.title.includes('Attack') || anime.title.includes('Steins') || anime.title.includes('Demon') || anime.title.includes('Neon') || match === currentDay;
  });

  list.innerHTML = filtered.slice(0, 5).map((anime) => {
    const countdown = `${String(Math.floor(Math.random() * 11) + 1).padStart(2, '0')}:30:15`;
    return `
      <div class="schedule-item">
        <div class="schedule-main">
          <img src="${anime.image}" alt="${anime.title}" />
          <div>
            <h3 class="schedule-title">${anime.title}</h3>
            <div class="schedule-time">${anime.episodes} episodes • ${anime.genre || 'Action'}</div>
          </div>
        </div>
        <div class="schedule-right">
          <div class="countdown">Starts in ${countdown}</div>
          <button class="schedule-stream" type="button" onclick="openAnimeModal(${anime.id})">Stream</button>
        </div>
      </div>
    `;
  }).join('');
}

function renderTrending() {
  const trending = [...animeDatabase].sort((a, b) => b.rating - a.rating).slice(0, 6);
  const container = document.getElementById('trendingGrid');
  container.innerHTML = trending
    .map(
      (anime, index) => `
        <div class="trending-item">
          <div class="rank">#${index + 1}</div>
          <img src="${anime.image}" alt="${anime.title}" />
          <div class="trending-copy">
            <h3>${anime.title}</h3>
            <span>⭐ ${anime.rating}</span>
            <button type="button" onclick="openAnimeModal(${anime.id})">Watch now</button>
          </div>
        </div>
      `
    )
    .join('');
}

function renderCommunity() {
  const feed = document.getElementById('communityFeed');
  feed.innerHTML = communityPosts
    .map(
      (post, index) => `
        <article class="community-item">
          <div class="community-head">
            <div class="community-user">
              <div class="community-avatar">${post.author.charAt(0)}</div>
              <div>
                <strong>${post.author}</strong>
              </div>
            </div>
            <span class="label">Live</span>
          </div>
          <h3>${post.title}</h3>
          <p>${post.content}</p>
          <div class="community-actions">
            <button type="button" onclick="likePost(${index})">🔥 ${post.likes}</button>
            <button type="button">💬 ${post.comments}</button>
            <button type="button">↻ Share</button>
          </div>
        </article>
      `
    )
    .join('');
}

function likePost(index) {
  communityPosts[index].likes += 1;
  renderCommunity();
}

function addCommunityPost() {
  const titleInput = document.getElementById('postTitle');
  const contentInput = document.getElementById('postContent');

  if (!titleInput.value.trim() || !contentInput.value.trim()) {
    return;
  }

  communityPosts.unshift({
    author: 'NightRider',
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
    likes: 1,
    comments: 0
  });

  titleInput.value = '';
  contentInput.value = '';
  renderCommunity();
}

function renderProfileAnime() {
  const container = document.getElementById('profileAnimeRow');
  container.innerHTML = profileAnimeImages
    .map((src) => `<img src="${src}" alt="favorite anime" />`)
    .join('');
}

function openAnimeModal(animeId) {
  const anime = animeDatabase.find((item) => item.id === Number(animeId));
  if (!anime) return;

  selectedAnimeId = anime.id;
  const modalBody = document.getElementById('modalBody');
  const episodeButtons = episodeLinks[anime.id] || [];

  modalBody.innerHTML = `
    <div class="modal-visual">
      <img src="${anime.image}" alt="${anime.title}" />
    </div>
    <div class="modal-info">
      <h2>${anime.title}</h2>
      <div class="modal-meta">
        <span>⭐ ${anime.rating}</span>
        <span>${anime.year}</span>
        <span>${anime.episodes} eps</span>
        <span>${anime.studio}</span>
      </div>
      <p>${anime.description}</p>
      <div class="modal-btns">
        ${episodeButtons.length
          ? episodeButtons.map((episode) => `<button class="watch-link-btn" type="button" onclick="openEpisodeLink(${anime.id}, ${episode.number})">Watch Ep ${episode.number}</button>`).join('')
          : `<button class="watch-link-btn" type="button" onclick="openAnimeModal(${anime.id})">Open Stream</button>`}
        <button class="secondary-link-btn" type="button" onclick="toggleWatchlist(${anime.id})">Save</button>
      </div>
    </div>
  `;

  document.getElementById('animeModal').classList.remove('hidden');
}

function closeAnimeModal() {
  document.getElementById('animeModal').classList.add('hidden');
}

function openEpisodeLink(animeId, episodeNumber) {
  const links = episodeLinks[animeId] || [];
  const episode = links.find((item) => item.number === episodeNumber);

  if (episode) {
    window.open(episode.url, '_blank', 'noopener,noreferrer');
  } else {
    alert(`Episode ${episodeNumber} is not available yet.`);
  }
}

function toggleWatchlist(animeId) {
  const watchlist = JSON.parse(localStorage.getItem('anime-future-watchlist') || '[]');
  const exists = watchlist.includes(animeId);
  const next = exists ? watchlist.filter((item) => item !== animeId) : [...watchlist, animeId];
  localStorage.setItem('anime-future-watchlist', JSON.stringify(next));
  alert(exists ? 'Removed from watchlist.' : 'Added to watchlist.');
}

function toggleNotifications() {
  document.getElementById('notificationPanel').classList.toggle('hidden');
}

function handleSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = animeDatabase.filter((anime) => {
    return (
      anime.title.toLowerCase().includes(query) ||
      anime.description.toLowerCase().includes(query) ||
      anime.genres.some((genre) => genre.toLowerCase().includes(query)) ||
      anime.studio.toLowerCase().includes(query)
    );
  });

  const list = filtered.length ? filtered : animeDatabase;
  renderCustomGrid(list);
}

function renderCustomGrid(list) {
  const container = document.getElementById('animeGrid');
  container.innerHTML = list
    .map(
      (anime) => `
        <article class="anime-card" onclick="openAnimeModal(${anime.id})">
          <div class="anime-thumb">
            <img src="${anime.image}" alt="${anime.title}" />
            <span class="anime-badge">${anime.episodes} eps</span>
            <span class="anime-score">⭐ ${anime.rating}</span>
          </div>
          <div class="anime-card-body">
            <div class="tag-row">
              ${anime.genres.slice(0, 2).map((genre) => `<span>${genre}</span>`).join('')}
            </div>
            <h3 class="anime-title">${anime.title}</h3>
            <div class="anime-footer">
              <span>${anime.year}</span>
              <button class="watch-toggle" type="button" onclick="event.stopPropagation(); toggleWatchlist(${anime.id})">★</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

window.addEventListener('DOMContentLoaded', () => {
  buildGenres();
  renderAnimeGrid();
  renderScheduleTabs();
  renderScheduleList();
  renderTrending();
  renderCommunity();
  renderProfileAnime();

  document.getElementById('searchInput').addEventListener('input', handleSearch);
  document.getElementById('notificationBtn').addEventListener('click', toggleNotifications);
});

window.addEventListener('click', (event) => {
  const modal = document.getElementById('animeModal');
  if (event.target === modal) {
    closeAnimeModal();
  }

  const notificationPanel = document.getElementById('notificationPanel');
  if (!notificationPanel.contains(event.target) && !event.target.matches('#notificationBtn')) {
    notificationPanel.classList.add('hidden');
  }
});
