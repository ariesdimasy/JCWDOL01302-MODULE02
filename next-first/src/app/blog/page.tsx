"use client";

import axios from "axios";
import dynamic from "next/dynamic";
import { useQuery } from "react-query";

async function getData() {
  const initialData = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return initialData;
}

export const revalidate = 3600;

const Parent = dynamic(() => import("@/components/parent"));

export default function Blog() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getData,
  });

  return (
    <div className="w-[80%] mx-auto my-[20px]">
      <h1 className="text-xl"> List Blog </h1>
      <hr></hr>

      <Parent />

      {isLoading && <div className="text-lg">Loading ... </div>}
      {!isLoading && (
        <div style={{ width: "80%", margin: "auto" }}>
          {data?.data?.map(
            (
              item: { id: number; title: string; body: string },
              index: number
            ) => {
              return (
                <a
                  style={{ margin: "10px 0", display: "block" }}
                  key={index}
                  href={`/blog/${item.id}`}
                >
                  <div>
                    {item.id} - {item.title}
                  </div>
                </a>
              );
            }
          )}
        </div>
      )}
    </div>
  );
}
