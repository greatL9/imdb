import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-4 p-4">
      <h1 className="text-2xl font-medium text-amber-600">About Moviq</h1>
      <p>
        Moviq is built for movie fans who want fast access to film details,
        ratings, and search results without the clutter. Our goal is to make it
        simple to discover the movies you care about and get the information you
        need in seconds.
      </p>
      <p>
        Browse new releases, explore classic favorites, or search by title to
        find the movie you want. Moviq presents clean, easy-to-read results so
        you can focus on your next watch instead of digging through menus.
      </p>
      <p>
        We designed this site to feel modern, responsive, and friendly whether
        you are on desktop or mobile. If you have ideas for new features or
        improvements, your feedback is welcome. We’re always working to make
        Moviq better for movie lovers everywhere.
      </p>
    </div>
  );
}
