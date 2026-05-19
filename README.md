# 🎌 Anime Hub - Premium Quality Anime Platform

A beautifully designed, responsive anime discovery platform featuring curated high-quality anime with detailed episode information. **Quality over quantity** is our philosophy.

## ✨ Key Features

### 🎯 Core Features
- **15 Premium Anime** - Carefully curated collection focusing on quality storytelling
- **Detailed Information** - Episodes, ratings, studios, genres, and descriptions
- **Smart Search** - Search by title, studio, or genre in real-time
- **Genre Filtering** - Browse anime by multiple genres with counts
- **Interactive Modal** - Click any anime to see comprehensive details

### 🎨 Design Excellence
- **Dark Theme** - Modern, eye-friendly dark interface perfect for anime fans
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile
- **Smooth Animations** - Elegant transitions and hover effects
- **Purple/Blue Aesthetic** - Anime-inspired color scheme with gradients
- **Sticky Navigation** - Easy access to search and navigation anywhere

### 📱 User Experience
- Sticky navbar with real-time search
- Genre filter buttons for quick browsing
- Interactive anime cards with hover effects
- Beautiful modal popups with full anime details
- Genre browse section with anime count per genre
- Scrollable anime database
- Mobile-optimized layout

## 📺 Premium Anime Collection

The platform features 15 carefully selected premium anime:

| Anime | Episodes | Rating | Studio |
|-------|----------|--------|--------|
| **Attack on Titan** | 75 | 9.3★ | WIT Studio/MAPPA |
| **Fullmetal Alchemist: Brotherhood** | 64 | 9.2★ | Bones |
| **Hunter x Hunter** | 148 | 9.0★ | Madhouse |
| **Death Note** | 37 | 9.0★ | Madhouse |
| **Demon Slayer** | 26 | 8.6★ | ufotable |
| **Neon Genesis Evangelion** | 26 | 8.4★ | Gainax |
| **Jujutsu Kaisen** | 47 | 8.9★ | MAPPA |
| **Steins;Gate** | 24 | 9.1★ | White Fox |
| **Naruto Shippuden** | 500 | 8.3★ | Studio Pierrot |
| **My Hero Academia** | 88 | 8.3★ | Bones |
| **Tokyo Ghoul** | 24 | 7.9★ | Studio Pierrot |
| **One Punch Man** | 24 | 8.8★ | Madhouse |
| **Sword Art Online** | 49 | 7.6★ | A-1 Pictures |
| **Your Name** | 1 | 8.9★ | CoMix Wave Films |
| **Spirited Away** | 1 | 8.6★ | Studio Ghibli |

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required - works entirely in the browser!

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/1758179-rgb/Anime-future.git
cd Anime-future
```

2. **Open in browser:**
```bash
# Simply open index.html in your browser
open index.html
# or on Windows
start index.html
# or on Linux
firefox index.html
```

That's it! The website is ready to use.

## 📁 Project Structure

```
Anime-future/
├── index.html      # Main HTML - responsive layout
├── style.css       # Complete styling - dark theme, animations
├── script.js       # Anime database and all functionality
└── README.md       # This documentation
```

## 🎮 How to Use

### Browse Anime
1. **Scroll** through the anime grid on the homepage
2. **View Details** - Click any anime card to open a detailed modal
3. **See Information** - Episodes, rating, studio, status, and description

### Search for Anime
- Use the **search bar** in the navbar
- Search by:
  - **Anime Title** (e.g., "Attack on Titan")
  - **Studio** (e.g., "Madhouse")
  - **Genre** (e.g., "Action")
- Results update **in real-time** as you type

### Filter by Genre
1. Click on **filter buttons** (Action, Adventure, Drama, etc.)
2. Or scroll to **"Browse by Genre"** section
3. Click any genre card to see all anime in that genre
4. Click **"All"** to reset filters

## 🔧 Customization

### Add More Anime

Edit `script.js` and add to the `animeDatabase` array:

```javascript
{
    id: 16,
    title: 'Your Anime Title',
    emoji: '🎌',
    episodes: 12,
    year: 2024,
    rating: 8.5,
    studio: 'Studio Name',
    genres: ['Action', 'Adventure'],
    description: 'Your anime description here...',
    episodeLength: '24 min',
    status: 'Ongoing',
    season: 1,
    nextEpisode: 'TBA'
}
```

### Customize Colors

Edit CSS variables in `style.css`:

```css
:root {
    --primary-color: #6c5ce7;      /* Main purple */
    --secondary-color: #a29bfe;    /* Light purple */
    --accent-color: #ff6b6b;       /* Red accent */
    --dark-bg: #0f0f1e;           /* Dark background */
    --darker-bg: #0a0a12;         /* Darker background */
    --text-light: #e8e8f0;        /* Light text */
    --text-gray: #b0b0b8;         /* Gray text */
    --border-color: #2a2a3e;      /* Border color */
}
```

### Change Fonts

Update font families in the `body` CSS rule:

```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with variables, gradients, and animations
- **JavaScript (ES6+)** - Dynamic functionality and interactivity
- **Responsive Design** - Mobile-first approach with media queries

### Key Functions

| Function | Purpose |
|----------|---------|
| `displayAnimeGrid()` | Renders anime cards in the grid |
| `displayGenres()` | Creates genre filter cards |
| `showAnimeModal()` | Opens detailed anime information |
| `filterGenre()` | Filters anime by selected genre |
| `searchAnime()` | Real-time search functionality |
| `closeModal()` | Closes the detail modal |

## 📊 Features Breakdown

| Feature | Status | Details |
|---------|--------|---------|
| Search Functionality | ✅ | Real-time search by title, studio, genre |
| Genre Filtering | ✅ | Filter buttons and genre cards |
| Detailed Modal | ✅ | Full anime information in popup |
| Responsive Design | ✅ | Works on all screen sizes |
| Dark Theme | ✅ | Purple/blue gradient theme |
| Episode Information | ✅ | Episodes, length, status, next episode |
| Rating System | ✅ | Star ratings with scores |
| Studio Information | ✅ | Production studio details |
| Emoji Integration | ✅ | Visual emoji indicators |
| Smooth Animations | ✅ | Transitions and hover effects |

## 🎯 Future Enhancements

- [ ] User accounts and watchlist
- [ ] Rating and reviews system
- [ ] MyAnimeList API integration
- [ ] Streaming links and recommendations
- [ ] Backend integration for data storage
- [ ] Dark/Light mode toggle
- [ ] Recommendation engine
- [ ] Admin panel for content management
- [ ] Social sharing features
- [ ] Episode tracking

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this repository and submit pull requests with improvements!

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Support & Issues

For issues, suggestions, or questions:
- Open an issue on GitHub
- Submit a feature request
- Check existing issues for solutions

## 🎊 Credits

- **Anime Data** - MyAnimeList
- **Design Inspiration** - Modern anime platforms
- **Icons & Emojis** - Unicode emoji set

---

**Made with ❤️ for anime lovers everywhere.**

**Quality > Quantity | Passion > Profit | Anime > Everything**

🎌 **Anime Hub © 2026** 🎌
