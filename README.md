# IMDb Clone

A modern IMDb clone built with Next.js 15.4.6, TypeScript, and Tailwind CSS. Browse trending and top-rated movies, search for your favorites, and view detailed information all with a clean, responsive UI.

## Features

- Trending and Top Rated movies from The Movie Database (TMDb)
- Search movies by title
- Movie detail pages
- Responsive design with Tailwind CSS
- Dark/Light mode toggle
- Fast navigation with Next.js App Router

## Tech Stack

- [Next.js 13+](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TMDb API](https://www.themoviedb.org/documentation/api)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/greatL9/imdb.git
   cd imdb
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   - Create a `.env.local` file in the root directory.
   - Add your TMDb API key:
     ```env
     API_KEY=your_tmdb_api_key_here
     ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```
src/
  app/           # Next.js app directory (pages, layouts, routes)
  components/    # Reusable UI components
public/          # Static assets
```

## Credits

- Movie data provided by [TMDb](https://www.themoviedb.org/)
- Inspired by IMDb

## License

This project is for educational purposes only. Not affiliated with IMDb or TMDb.
