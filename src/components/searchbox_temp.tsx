"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

function Searchbox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    setSearch("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        className="w-full h-14 rounded-sm outline-none bg-transparent flex-1"
        type="text"
        placeholder="search for movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        disabled={!search}
        className="text-amber-600 disabled:text-gray-400"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export { Searchbox };
