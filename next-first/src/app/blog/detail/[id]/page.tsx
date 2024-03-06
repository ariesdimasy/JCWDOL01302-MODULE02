"use client";

import { useParams } from "next/navigation";

import Test from "../../../../components/test";

export default function BlogDetail() {
  const params = useParams<{ id: string }>();

  return (
    <div>
      <h1> Blog Detail {JSON.stringify(params)}</h1>
      <hr></hr>
      <Test />
    </div>
  );
}
