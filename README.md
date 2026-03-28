# IMDb Clone

A modern, responsive IMDb clone built with Next.js, TypeScript, and Tailwind CSS. Discover trending and top-rated movies, search for your favorites, and explore detailed movie information with a sleek, user-friendly interface.

## ✨ Features

- **Trending & Top-Rated Movies**: Browse the latest trending movies and all-time top-rated films from The Movie Database (TMDb)
- **Powerful Search**: Find movies by title with instant search results
- **Detailed Movie Pages**: View comprehensive movie information including posters, overviews, release dates, and ratings
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Fast Navigation**: Built with Next.js App Router for seamless page transitions
- **Type-Safe**: Fully typed with TypeScript for reliability and developer experience

## 🚀 Why This Project is Useful

This IMDb clone serves as an excellent example of modern web development practices and provides a practical movie discovery platform. Whether you're a developer learning Next.js or a movie enthusiast looking for a clean way to explore films, this project offers:

- Real-world API integration with TMDb
- Server-side rendering for optimal performance
- Component-based architecture with reusable UI elements
- Accessibility-focused design with proper semantic HTML
- Production-ready code structure following Next.js best practices

## 🛠 Tech Stack

- **[Next.js 15.4.6](https://nextjs.org/)** - React framework with App Router
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4.1.11](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React 19.1.0](https://reactjs.org/)** - UI library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme switching
- **[TMDb API](https://www.themoviedb.org/documentation/api)** - Movie data source
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- npm or yarn package manager
- A TMDb API key (free to obtain)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/greatL9/imdb.git
cd imdb
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
API_KEY=your_tmdb_api_key_here
```

> **Note**: Get your free API key from [The Movie Database](https://www.themoviedb.org/settings/api).

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 5. Build for Production

```bash
npm run build
npm start
```

## 📖 Usage Examples

### Browsing Movies

- Visit the home page to see trending movies
- Click "Top Rated" in the navigation to view highly-rated films
- Click on any movie card to view detailed information

### Searching Movies

1. Use the search bar at the top of the page
2. Enter a movie title (e.g., "Inception")
3. Press Enter or click the search button
4. Browse through the search results

### Theme Switching

- Click the sun/moon icon in the header to toggle between light and dark modes
- Your preference is automatically saved

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── movie/[id]/        # Dynamic movie detail pages
│   ├── search/[searchTerm]/ # Dynamic search result pages
│   ├── error.tsx          # Error boundary
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── loading.tsx        # Loading UI
│   └── page.tsx           # Home page
└── components/            # Reusable React components
    ├── Card.tsx           # Movie card component
    ├── Header.tsx         # Site header with navigation
    ├── MenuItem.tsx       # Navigation menu item
    ├── Navbar.tsx         # Main navigation bar
    ├── NavbarItem.tsx     # Navbar item component
    ├── Results.tsx        # Movie results grid
    ├── Searchbox.tsx      # Search input component
    └── ToggleMode.tsx     # Theme toggle component

public/                    # Static assets
```

## 🐛 Troubleshooting

### Common Issues

- **API Key Issues**: Ensure your `.env.local` file is in the root directory and contains a valid TMDb API key
- **Port Already in Use**: If port 3000 is busy, Next.js will suggest an alternative port
- **Build Errors**: Run `npm run lint` to check for code issues

### Development Commands

```bash
# Lint code
npm run lint

# Type checking
npx tsc --noEmit

# Clean build
rm -rf .next && npm run build
```

## Credits

- Movie data provided by [TMDb](https://www.themoviedb.org/)
- Inspired by IMDb
