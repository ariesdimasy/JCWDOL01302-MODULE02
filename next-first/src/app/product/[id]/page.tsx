import Image from "next/image";

import { getItem } from "@/utils/get-item";

interface IParams {
  params: {
    id: number;
  };
}

export async function generateMetadata({ params }) {
  const id = params.id;

  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/`);
  const res = await post.json();
  console.log(res);
  return {
    title: res.title,
    description: res.body,
  };
}

export default async function ProductDetail(props: IParams) {
  const { id } = props.params;

  const item = await getItem(id);

  return (
    <div className="w-[80%] mx-auto my-[20px]">
      <h1 className="text-2xl">
        {item.id}. {item.title}
      </h1>
      <hr></hr>
      <Image
        style={{ margin: "auto" }}
        alt="synthwave"
        src={"/image.jpg"}
        width={400}
        height={250}
        objectFit={""}
      />
      <div className="py-[20px] my-[20px]">{item.body}</div>
    </div>
  );
}
