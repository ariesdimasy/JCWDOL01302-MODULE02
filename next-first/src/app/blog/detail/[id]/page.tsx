"use client";

import { useParams } from "next/navigation";

import Test from "../../../../components/test";
import Navbar from "@/components/Navbar";

export default function BlogDetail() {
  const params = useParams<{ id: string }>();

  return (
    <div>
      <Navbar />
      <h1> Blog Detail {JSON.stringify(params)}</h1>
      <hr></hr>
    </div>
  );
}
