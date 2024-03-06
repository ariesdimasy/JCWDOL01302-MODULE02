"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h1> Home </h1>
      <hr />
      <Link href={"/blog"}> Blog </Link>
      <button type="button" onClick={() => router.push("/blog")}>
        {" "}
        Blog{" "}
      </button>
    </div>
  );
}
