import Link from "next/link";

export default function MenuItem({
  title,
  address,
  icon,
}: {
  title: string;
  address: string;
  icon: React.ReactNode;
}) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        {icon && <span className="text-2xl sm:hidden mx-4">{icon}</span>}
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}
