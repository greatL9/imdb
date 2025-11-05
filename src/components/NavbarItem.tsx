"use client";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function NavbarItem({ title, param }: { title: string; param: string }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={clsx("m-4 hover:text-amber-600 font-semibold p-2", {
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg":
            genre && genre === param,
        })}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
export { NavbarItem };
