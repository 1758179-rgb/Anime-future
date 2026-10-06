// Anime Database
const animeDatabase = [
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
  },
  {
    id: 1,
    title: 'Attack on Titan',
    year: 2013,
    rating: 9.3,
    episodes: 75,
    studio: 'WIT Studio / MAPPA',
    genres: ['Action', 'Drama', 'Fantasy'],
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
    description: 'Humanity stands behind towering walls while colossal titans threaten the remaining peace.'
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
    description: 'Two brothers seek the Philosopher\'s Stone after a failed alchemy experiment.'
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
    description: 'Gon Freecss sets out to find his father and become a Hunter.'
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
    description: 'Light Yagami finds a notebook that can kill anyone whose name is written within it.'
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
    description: 'Tanjiro enters a brutal world of demons and swordsmanship.'
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
    description: 'A cursed teenager joins a secret coliseum of sorcerers.'
  },
  {
    id: 7,
    title: 'Neon Genesis Evangelion',
    year: 1995,
    rating: 8.4,
    episodes: 26,
    studio: 'Gainax',
    genres: ['Mecha', 'Psychological', 'Drama'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80',
    description: 'Teenage pilots fight giant angels and question what it means to be alive.'
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
    description: 'In a world full of heroes, one powerless boy dreams of becoming the strongest.'
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
    description: 'A hero with unbeatable power is bored by constant victories.'
  }
];

// Episode Links with Google Drive Direct Links
const episodeLinks = {
  16: [
    { number: 41, url: 'https://drive.google.com/file/d/16WKuep15ZwUTpCIZVM0A0hHvHuIbn7to/view?usp=sharing', title: 'The True Soul' },
    { number: 42, url: 'https://drive.google.com/file/d/1fLHjKIo_2o2DNEahVb9cRvKvDm6viccn/view?usp=sharing', title: 'The Final Battle Begins' }
  ]
};

let currentPlayer = {
  animeId: null,
  episodeNumber: null,
  url: null
};

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
  renderAnimeGrid(animeDatabase);
  renderGenreFilter();
});

// Render Anime Grid
function renderAnimeGrid(list) {
  const grid = document.getElementById('animeGrid');
  grid.innerHTML = list.map(anime => `
    <article class="group cursor-pointer" onclick="openPlayerForEpisode(${anime.id}, 1)">
      <div class="relative rounded-xl overflow-hidden border border-rgba(110, 143, 200, 0.24) aspect-video mb-3 bg-black">
        <img src="${anime.image}" alt="${anime.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <div class="w-16 h-16 rounded-full bg-anime-cyan text-black flex items-center justify-center group-hover:scale-110 transition shadow-lg">
            <i class="fa-solid fa-play ml-1 text-xl"></i>
          </div>
        </div>
        <span class="absolute top-2 left-2 px-2.5 py-1 rounded-lg bg-anime-panel text-anime-cyan text-xs font-bold border border-rgba(77, 231, 255, 0.3)">${anime.episodes} eps</span>
        <span class="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-anime-panel text-anime-gold text-xs font-bold">⭐ ${anime.rating}</span>
      </div>
      <div class="space-y-2">
        <h3 class="font-bold text-anime-text group-hover:text-anime-cyan transition line-clamp-2">${anime.title}</h3>
        <div class="flex flex-wrap gap-1">
          ${anime.genres.slice(0, 2).map(g => `<span class="text-xs px-2 py-0.5 rounded-full bg-anime-panel/50 text-anime-cyan border border-rgba(77, 231, 255, 0.2)">${g}</span>`).join('')}
        </div>
        <div class="flex justify-between text-xs text-anime-muted">
          <span>${anime.year}</span>
          <span>${anime.studio}</span>
        </div>
      </div>
    </article>
  `).join('');
}

// Render Genre Filter
function renderGenreFilter() {
  const genreSet = new Set();
  animeDatabase.forEach(anime => anime.genres.forEach(g => genreSet.add(g)));
  const genres = ['All', ...Array.from(genreSet).sort()];
  
  const filterContainer = document.getElementById('genreFilter');
  filterContainer.innerHTML = genres.map(genre => `
    <button onclick="filterByGenre('${genre}')" class="px-4 py-2 rounded-lg border transition text-xs font-semibold ${genre === 'All' ? 'bg-anime-cyan text-black border-anime-cyan' : 'bg-anime-panel border-anime-line text-anime-text hover:border-anime-cyan hover:text-anime-cyan'}">${genre}</button>
  `).join('');
}

// Filter by Genre
function filterByGenre(genre) {
  const filtered = genre === 'All' ? animeDatabase : animeDatabase.filter(a => a.genres.includes(genre));
  renderAnimeGrid(filtered);
  renderGenreFilter();
}

// Search Anime
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const filtered = animeDatabase.filter(a => 
        a.title.toLowerCase().includes(query) ||
        a.description.toLowerCase().includes(query) ||
        a.genres.some(g => g.toLowerCase().includes(query))
      );
      renderAnimeGrid(filtered.length ? filtered : animeDatabase);
    });
  }
});

// Open Player for Episode
function openPlayerForEpisode(animeId, episodeNumber) {
  const anime = animeDatabase.find(a => a.id === animeId);
  if (!anime) return;

  const links = episodeLinks[animeId];
  let episodeUrl = null;
  let episodeTitle = `Episode ${episodeNumber}`;

  if (links) {
    const episode = links.find(e => e.number === episodeNumber);
    if (episode) {
      episodeUrl = episode.url;
      episodeTitle = episode.title;
    }
  }

  // Update player data
  currentPlayer = {
    animeId,
    episodeNumber,
    url: episodeUrl
  };

  // Update UI
  document.getElementById('videoNameDisplay').textContent = anime.title;
  document.getElementById('playerTitle').textContent = `${anime.title} - ${episodeTitle}`;
  document.getElementById('playerDesc').textContent = anime.description;
  document.getElementById('playerSpeed').value = '1';

  // Set video source
  const video = document.getElementById('mainVideo');
  if (episodeUrl) {
    // If it's a Google Drive link, we need to convert it to a direct download link
    const directLink = episodeUrl.replace('/view?usp=sharing', '/export?format=mp4');
    video.src = directLink;
  } else {
    video.src = '';
  }

  // Show modal
  document.getElementById('playerModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Close Player
function closePlayer() {
  const modal = document.getElementById('playerModal');
  const video = document.getElementById('mainVideo');
  video.pause();
  video.src = '';
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Player Controls
function togglePlayerPlay() {
  const video = document.getElementById('mainVideo');
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayerUI() {
  const video = document.getElementById('mainVideo');
  const progressBar = document.getElementById('playerProgressBar');
  const timeDisplay = document.getElementById('playerTime');
  const playIcon = document.getElementById('playerPlayIcon');
  const overlayIcon = document.getElementById('overlayPlayIcon');

  if (!video.duration) return;

  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = percent + '%';
  timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;

  if (video.paused) {
    playIcon.className = 'fa-solid fa-play text-lg';
    overlayIcon.className = 'fa-solid fa-play ml-1';
  } else {
    playIcon.className = 'fa-solid fa-pause text-lg';
    overlayIcon.className = 'fa-solid fa-pause ml-0.5';
  }
}

function playerSeek(e) {
  const video = document.getElementById('mainVideo');
  const bar = document.getElementById('progressContainer');
  const percent = e.offsetX / bar.offsetWidth;
  video.currentTime = percent * video.duration;
}

function changePlayerSpeed(speed) {
  document.getElementById('mainVideo').playbackRate = parseFloat(speed);
}

function togglePlayerMute() {
  const video = document.getElementById('mainVideo');
  const icon = document.getElementById('playerMuteIcon');
  video.muted = !video.muted;
  icon.className = video.muted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
}

function togglePlayerPicture() {
  const video = document.getElementById('mainVideo');
  if (document.pictureInPictureEnabled) {
    document.pictureInPictureElement ? document.exitPictureInPicture() : video.requestPictureInPicture();
  }
}

function requestPlayerFullscreen() {
  document.getElementById('playerModal').requestFullscreen().catch(err => console.log(err));
}

function togglePlayerSubtitles() {
  showToast('Subtitles feature coming soon!');
}

function handleVideoEnded() {
  showToast('Episode completed! Next episode loading...');
  setTimeout(() => closePlayer(), 2000);
}

function playCurrentEpisode() {
  if (currentPlayer.url) {
    window.open(currentPlayer.url, '_blank', 'noopener,noreferrer');
  } else {
    showToast('Episode not available');
  }
}

function addToWatchlist() {
  showToast('Added to watchlist!');
}

// Utility Functions
function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '00:00';
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  if (hrs > 0) {
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function showToast(message) {
  const toast = document.getElementById('toast');
  document.getElementById('toastText').textContent = message;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3000);
}

function toggleNotifications() {
  showToast('No new notifications');
}
