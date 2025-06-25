# ALX Stream - Movies & Series Online

A modern, responsive movie streaming platform built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **🎬 Movie Browsing**: Browse and discover movies with beautiful UI
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **🎨 Modern UI**: Clean, dark theme with smooth animations
- **🔍 Search & Filter**: Find movies by category, year, and rating
- **👤 User Authentication**: Login and registration system
- **📊 Dashboard**: Simple admin dashboard for content management
- **⚡ Fast Performance**: Optimized for speed and efficiency

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Carousel**: Swiper.js
- **Deployment**: Cloudflare Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ALX-Stream
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🌐 Deployment

This project is optimized for **Cloudflare Pages** deployment:

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set build output directory: `dist`
4. Deploy!

## 📁 Project Structure

```
src/
├── Components/          # Reusable UI components
│   ├── Home/           # Homepage components
│   ├── Movie.jsx       # Movie card component
│   ├── Filters.jsx     # Search and filter component
│   └── Uploader.jsx    # File upload component
├── Screens/            # Page components
│   ├── HomeScreen.jsx  # Homepage
│   ├── Movie.jsx       # Movies listing
│   ├── SingleMovie.jsx # Single movie details
│   ├── Login.jsx       # Login page
│   └── Dashboard/      # Admin dashboard
├── Layout/             # Layout components
│   ├── Layout.jsx      # Main layout wrapper
│   ├── NavBar/         # Navigation bar
│   └── Footer/         # Footer components
└── Data/               # Static data
    ├── MovieData.js    # Movies and anime data
    └── content.js      # Footer links and content
```

## 🎯 Core Features

### ✅ Functional Features
- **Homepage**: Banner carousel, popular movies, top rated
- **Movie Browsing**: Grid layout with movie cards
- **Movie Details**: Single movie page with info and related movies
- **Search & Filters**: Category, year, and rating filters
- **User Authentication**: Login and registration forms
- **Admin Dashboard**: Basic dashboard with movie statistics
- **Responsive Design**: Mobile-first approach

### 🗑️ Removed Features
- Video player (was non-functional)
- Favorites system (was non-functional)
- Complex admin features (categories, users management)
- Password change functionality
- Complex modal systems

## 🚀 Performance

- **Bundle Size**: ~152KB (gzipped)
- **Build Time**: ~5 seconds
- **Dependencies**: Only essential packages
- **Cloudflare Pages**: Fully optimized for deployment

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Ready for deployment!** 🎉
